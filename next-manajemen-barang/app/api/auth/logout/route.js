import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("user_id");
  return Response.json({ message: "Logout berhasil" });
}
