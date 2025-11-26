import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const db = new PrismaClient();

export async function POST(req: Request) {
  const { url } = await req.json();
  if (!url) return NextResponse.json({ error: "Missing url" }, { status: 400 });

  const shortId = nanoid(6);

  await db.link.create({
    data: { url, shortId }
  });

  return NextResponse.json({ short: shortId });
}
