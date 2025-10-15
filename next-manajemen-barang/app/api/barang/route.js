import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = 3;

  const total = await prisma.barang.count();
  const barangs = await prisma.barang.findMany({
    skip: (page - 1) * perPage,
    take: perPage,
    orderBy: { id: "desc" },
  });

  return Response.json({
    data: barangs,
    pagination: {
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    },
  });
}

export async function POST(req) {
  const data = await req.json();
  const barang = await prisma.barang.create({ data });
  return Response.json(barang);
}
