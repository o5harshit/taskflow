// import { auth } from "./app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

// export const middleware = (request) => {

//   // User is NOT logged in
//   // if (!request.auth) {

//   //   const signInUrl = new URL("/signin", request.url);

//   //   // Save the page the user originally wanted
//   //   signInUrl.searchParams.set(
//   //     "callbackUrl",
//   //     request.nextUrl.pathname + request.nextUrl.search
//   //   );

//   //   return NextResponse.redirect(signInUrl);
//   // }

//   // User is logged in
//   // return NextResponse.next();
// };

// middleware if it have to use multiple function - 
// 1) Auth Middleware 
// 2) Role Middlware
export function middleware(request) {

  // const authResult = authMiddleware(request);

  // if (authResult) {
  //     return authResult;
  // }

  // const roleResult = roleMiddleware(request);

  // if (roleResult) {
  //     return roleResult;
  // }

  // return NextResponse.next();
}


// import { auth } from "@/auth";
// import { NextResponse } from "next/server";

// export default auth((request) => {
//   const pathname = request.nextUrl.pathname;

//   // -------------------------
//   // /dashboard → Auth only
//   // -------------------------
//   if (pathname.startsWith("/dashboard")) {

//     if (!request.auth) {
//       const url = new URL("/signin", request.url);

//       url.searchParams.set(
//         "callbackUrl",
//         pathname
//       );

//       return NextResponse.redirect(url);
//     }

//     return NextResponse.next();
//   }

//   // -------------------------
//   // /projects → Auth + Role
//   // -------------------------
//   if (pathname.startsWith("/projects")) {

//     // First authentication
//     if (!request.auth) {
//       return NextResponse.redirect(
//         new URL("/signin", request.url)
//       );
//     }

//     // Then role check
//     const role = request.auth.user.role;

//     if (role !== "ADMIN") {
//       return NextResponse.redirect(
//         new URL("/dashboard", request.url)
//       );
//     }

//     return NextResponse.next();
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/projects/:path*",
//   ],
// };
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/projects/:path*",
  ],
};