import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        // Get document
        const { data: document, error } =
            await supabase
                .from("documents")
                .select("*")
                .eq("id", id)
                .single();

        if (error || !document) {
            return NextResponse.json(
                { error: "Document not found" },
                { status: 404 }
            );
        }

        /**
         * CONDITION
         */

        const currentUser =
            req.headers.get("x-user-id");

        const canDownload =
            document.is_public ||
            currentUser === document.uploaded_by;

        if (!canDownload) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 }
            );
        }

        // Generate signed URL
        const { data: signedUrlData, error: signError } =
            await supabase.storage
                .from(document.bucket)
                .createSignedUrl(
                    document.file_path,
                    60,
                    {
                        download: document.name,
                    }
                );

        if (signError) {
            return NextResponse.json(
                { error: signError.message },
                { status: 500 }
            );
        }

        return NextResponse.redirect(
            signedUrlData.signedUrl
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Download failed" },
            { status: 500 }
        );
    }
}
