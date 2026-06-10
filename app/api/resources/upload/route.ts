import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const file = formData.get("file") as File;

        const uploadedBy =
            formData.get("uploadedBy") as string;

        if (!file) {
            return NextResponse.json(
                { error: "File is required" },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes);

        const bucket = "resources";

        const filePath = `${uploadedBy}/${Date.now()}-${file.name}`;

        // Upload to storage
        const { error: uploadError } =
            await supabase.storage
                .from(bucket)
                .upload(filePath, buffer, {
                    contentType: file.type,
                });

        if (uploadError) {
            return NextResponse.json(
                { error: uploadError.message },
                { status: 500 }
            );
        }

        // Save metadata
        const { data, error: dbError } =
            await supabase
                .from("resources")
                .insert({
                    name: file.name,
                    bucket,
                    file_path: filePath,
                    mime_type: file.type,
                    size: file.size,
                    uploaded_by: uploadedBy,
                })
                .select()
                .single();

        if (dbError) {
            return NextResponse.json(
                { error: dbError.message },
                { status: 500 }
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Upload failed" },
            { status: 500 }
        );
    }
}
