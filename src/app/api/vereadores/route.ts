import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const vereadores = await prisma.vereador.findMany({
      include: { municipio: true },
    });
    return NextResponse.json(vereadores);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar municípios: " + error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const data = await request.json();

  try {
    // aqui também usando Prisma como exemplo:
    const municipio = await prisma.municipio.findFirst({
      where: { id: parseInt(data.municipio) },
    });

    if (!municipio) {
      return NextResponse.json(
        { error: "Município não encontrado." },
        { status: 400 }
      );
    }

    await prisma.vereador.create({
      data: {
        nome: data.nome,
        email: data.email,
        whatsapp: data.whatsapp,
        partido: data.partido,
        municipioId: parseInt(data.municipio),
      },
    });

    return NextResponse.json(
      { message: "Vereador criado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao criar vereador." },
      { status: 500 }
    );
  }
}
