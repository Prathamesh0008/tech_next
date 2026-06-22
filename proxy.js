import { NextResponse } from "next/server";

const PUBLIC_FILE_REGEX = /\/[^/]+\.[^/]+$/;

export function proxy(request) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.length > 1 &&
    pathname.endsWith("/") &&
    !pathname.startsWith("/.well-known/") &&
    !PUBLIC_FILE_REGEX.test(pathname)
  ) {
    const target = new URL(`${pathname.slice(0, -1)}${search}`, request.url);
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
