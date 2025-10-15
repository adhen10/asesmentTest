import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    return Response.json({ error: "Semua field wajib diisi" }, { status: 400 });
  }

  const existing = await prisma.user.findFirst({
    where: { OR: [{ username }, { email }] },
  });
  if (existing) {
    return Response.json(
      { error: "Username atau email sudah digunakan" },
      { status: 400 }
    );
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { username, email, password: hashed },
  });

  return Response.json({ message: "Akun berhasil dibuat", user });
}
