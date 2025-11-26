import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function GET() {
  const all = await db.link.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(all);
}
