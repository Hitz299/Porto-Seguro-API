// app/api/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ message: 'Logout bem-sucedido' });

    // Remover o cookie auth_token
    response.cookies.set('auth_token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,  
        path: '/',
    });

    return response;
}
