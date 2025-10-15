import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const barang = await prisma.barang.findUnique({
    where: { id: parseInt(params.id) },
  });
  return Response.json(barang);
}

export async function PUT(req, { params }) {
  const data = await req.json();
  const barang = await prisma.barang.update({
    where: { id: parseInt(params.id) },
    data,
  });
  return Response.json(barang);
}

export async function DELETE(req, { params }) {
  await prisma.barang.delete({ where: { id: parseInt(params.id) } });
  return Response.json({ message: "Deleted" });
}
