import { NextResponse } from "next/server";

type MType = {
  id: string;
  nome: string;
};

export async function GET() {
  try {
    const res = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ES/municipios"
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar lista de municipios.");
    }

    const data = await res.json();

    const municipiosList = data.map((m: MType) => ({ id: m.id, nome: m.nome }));

    return NextResponse.json(municipiosList, { status: 201 });
  } catch (error) {
    console.error(error);
  }
}
