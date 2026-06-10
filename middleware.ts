// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow login page
    if (pathname === "/auth/login") {
        return NextResponse.next();
    }

    // Example auth check
    const token = request.cookies.get("admin_token");

    // Redirect if not authenticated
    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
