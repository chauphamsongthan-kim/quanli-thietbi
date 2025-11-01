import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const devices = await prisma.device.findMany();
  return Response.json(devices);
}

export async function POST(req) {
  const data = await req.json();
  const newDevice = await prisma.device.create({ data });
  return Response.json(newDevice);
}
