import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function POST(req) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    return Response.json(
      { error: "Username tidak ditemukan" },
      { status: 400 }
    );
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return Response.json({ error: "Password salah" }, { status: 400 });
  }

  cookies().set("user_id", user.id, { httpOnly: true });
  return Response.json({ message: "Login berhasil", user });
}
