// app/api/admin/login/route.ts

import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { email, password } = body;

        // Validate against env variables
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (
            email !== ADMIN_EMAIL ||
            password !== ADMIN_PASSWORD
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid credentials",
                },
                {
                    status: 401,
                }
            );
        }

        const token = uuidv4();

        const response = NextResponse.json({
            success: true,
        });

        // Save auth cookie
        response.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Server error",
            },
            {
                status: 500,
            }
        );
    }
}
