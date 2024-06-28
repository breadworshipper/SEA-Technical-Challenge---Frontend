import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/admin", "/reservation", "/dashboard"]

export default function middleware(req: any) {
const verified =
    (req.cookies.get("loggedIn")?.value === "true" &&
        (req.cookies.get("role")?.value === "Customer" ||
            req.cookies.get("role")?.value === "Admin"))

  if (!verified && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/unauthorized", req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
}
