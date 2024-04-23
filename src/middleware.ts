import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest): unknown {
  const token = request.cookies.get("tastebites");

  const SAME_URL: any = process.env.NEXT_PUBLIC_REDIRECT_BASE_URL;

  if (!token?.value) {
    return NextResponse.redirect(SAME_URL);
  }
}

export const config = {
  matcher: ["/", "/recipe", "/contact"]
};
