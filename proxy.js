import { NextResponse } from "next/server";

const PUBLIC_FILE_REGEX = /\/[^/]+\.[^/]+$/;
const CANONICAL_HOST = "www.novatechsciences.com";
const APEX_HOSTS = new Set(["novatechsciences.com"]);

export function proxy(request) {
  const { hostname, pathname, search } = request.nextUrl;

  if (APEX_HOSTS.has(hostname)) {
    const target = new URL(request.url);
    target.hostname = CANONICAL_HOST;
    return NextResponse.redirect(target, 301);
  }

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
