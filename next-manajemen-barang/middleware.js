import { NextResponse } from "next/server";

export function middleware(req) {
  const userId = req.cookies.get("user_id")?.value;
  const { pathname } = req.nextUrl;
	
  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  if (!userId && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (userId && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/barang/:path*", "/login", "/register"],
};
