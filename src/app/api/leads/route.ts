import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({ include: { municipio: true } });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar leads: " + error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const data = await request.json();

  try {
    await prisma.lead.create({
      data: {
        nome: data.nome,
        email: data.email,
        whatsapp: data.whatsapp,
        bairro: data.bairro,
        municipioId: parseInt(data.municipio),
      },
    });

    return NextResponse.json(
      { message: "Cidadão criado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao criar cidadão." },
      { status: 500 }
    );
  }
}
