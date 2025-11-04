import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function getUserFromCookies(): Promise<{ name?: string } | null> {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    console.log("payload : ", payload);
    if (typeof payload.name === "string") {
      return { name: payload.name };
    }
    return null;
  } catch {
    return null;
  }
}
