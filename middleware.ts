import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('token')?.value
    // console.log("token : ",token );
    // console.log("verify : ", jwtVerify(token!, JWT_SECRET));
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    try {
      jwtVerify(token!, JWT_SECRET)
    } catch {
      // Invalid or expired token: remove and redirect
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('token')
      return response
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
