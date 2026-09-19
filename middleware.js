// import { auth } from "./app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export const middleware = (request) => {

  // User is NOT logged in
  // if (!request.auth) {

  //   const signInUrl = new URL("/signin", request.url);

  //   // Save the page the user originally wanted
  //   signInUrl.searchParams.set(
  //     "callbackUrl",
  //     request.nextUrl.pathname + request.nextUrl.search
  //   );

  //   return NextResponse.redirect(signInUrl);
  // }

  // User is logged in
  // return NextResponse.next();
};

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/projects/:path*",
  ],
};