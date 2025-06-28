import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    if (!token) return NextResponse.redirect(new URL("/login", req.url));
    if (token.role === "admin" && req.nextUrl.pathname !== "/admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else if (token.role === "user" && req.nextUrl.pathname !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);
export const config = { matcher: ["/dashboard", "/admin"] };
