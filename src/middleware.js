import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let isLoggedIn = request.cookies.get('refreshToken')?.value;
  if (isLoggedIn === undefined) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile', '/profile/:path', '/profile/edit', '/games/:path/play'],
};
