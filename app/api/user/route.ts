import { getUserFromCookies } from '@/lib/getUserFromCookies';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const user = await getUserFromCookies();
    if (!user || !user.name) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    return NextResponse.json({ name: user.name });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
