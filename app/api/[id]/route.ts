import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const row = await db.link.findUnique({
    where: { shortId: params.id }
  });

  if (!row) return NextResponse.redirect(new URL('/', req.url));

  await db.link.update({
    where: { shortId: params.id },
    data: { clicks: { increment: 1 } }
  });

  return NextResponse.redirect(row.url);
}
