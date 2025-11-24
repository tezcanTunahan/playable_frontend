import { NextResponse, type NextRequest } from "next/server";

const adminRoutes = ["/admin"];
const userRoutes = ["/products", "/user", "/shoppingCart", "checkout"];
const publicRoutes = ["/", "/login", "/register"];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const tokenCookie = req.cookies.get("auth-storage");

  const data = tokenCookie ? JSON.parse(tokenCookie.value) : null;
  const accessToken = data?.state?.accessToken;
  const role = data?.state?.role;

  const isPublicRoute = publicRoutes.some((route) => path == route);
  const isAdminRoute = adminRoutes.some((route) => path.startsWith(route));
  const isUserRoute = userRoutes.some((route) => path.startsWith(route));

  if ((isAdminRoute || isUserRoute) && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isPublicRoute && accessToken) {
    if (role == "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else {
      return NextResponse.redirect(new URL("/user", req.url));
    }
  }

  // if (isAdminRoute && role !== "user") {
  //   return NextResponse.redirect(new URL("/user", req.url));
  // }

  // if (isUserRoute && role !== "admin") {
  //   return NextResponse.redirect(new URL("/admin", req.url));
  // }

  return NextResponse.next();
}
