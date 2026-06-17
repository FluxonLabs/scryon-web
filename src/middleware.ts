import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DASHBOARD_HOSTS = [
  "dashboard.scryon.app",
  "dashboard.localhost:3000", // local dev
];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  const isDashboard = DASHBOARD_HOSTS.some((h) => hostname === h);

  if (isDashboard) {
    // Rewrite dashboard.scryon.app/* → /dashboard/* internally
    const rewrittenPath =
      pathname === "/" ? "/dashboard" : `/dashboard${pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = rewrittenPath;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except Next.js internals and static files
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|svg|ico)$).*)"],
};
