import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    // Allow access to login page if not authenticated
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Role-based redirects - only redirect if accessing wrong dashboard
    if (token.role === "admin" && pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    if (token.role === "user" && pathname === "/admin") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Allow access to the correct dashboard
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Always allow access to API routes and NextAuth pages
        if (req.nextUrl.pathname.startsWith("/api/")) return true;

        // Require authentication for protected routes
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
