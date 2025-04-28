// app/api/municipios/route.ts
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function GET() {
  try {
    const municipios = await prisma.municipio.findMany({
      include: { vereadores: true, leads: true },
    });
    return NextResponse.json(municipios);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar municípios: " + error },
      { status: 500 }
    );
  }
}
