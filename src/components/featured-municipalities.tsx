import Link from "next/link"
import Image from "next/image"
import { Award } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prisma from "@/prisma"

// Dados de exemplo - em uma aplicação real, estes viriam de uma API ou banco de dados
const municipiosDestaque = await prisma.municipio.findMany({ where: { destaque: true }, include: { vereadores: true, leads: true } })

export function FeaturedMunicipalities() {
  return (
    <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {municipiosDestaque.map((municipio) => (
        <Card key={municipio.id} className="overflow-hidden bg-[#121212] border-[#333333]">
          <CardHeader className="p-0">
            <div className="relative h-[200px] w-full">
              <Image
                src="/placeholder.svg"
                alt={`Cidade de ${municipio.nome}`}
                fill
                className="object-cover"
              />
              <div className="absolute right-2 top-2">
                <Badge className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                  <Award className="mr-1 h-3 w-3" /> Destaque
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-2xl">
              {municipio.nome}
            </CardTitle>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-[#8B0000]">{municipio.aprovados}</span> Projetos de Lei
                aprovados
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-[#8B0000]">{municipio.leads.length}</span> Apoiadores Locais
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-[#8B0000]">{municipio.vereadores.length}</span> Vereadores aliados
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Link href={`/municipios/${municipio.id}`} className="w-full">
              <div className="w-full rounded-md bg-[#8B0000] px-4 py-2 text-center font-medium text-white hover:bg-[#8B0000]/90">
                Ver detalhes
              </div>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
