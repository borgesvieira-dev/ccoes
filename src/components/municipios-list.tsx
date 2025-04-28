import Link from "next/link"
import Image from "next/image"
import { Award, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import prisma from "@/prisma"

// Dados de exemplo - em uma aplicação real, estes viriam de uma API ou banco de dados
const municipalities = await prisma.municipio.findMany({ include: { vereadores: true, leads: true } })

export function MunicipalityList() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="nao-protocolado">Não Protocolado</TabsTrigger>
          <TabsTrigger value="protocolado">Protocolado</TabsTrigger>
          <TabsTrigger value="aprovado">Aprovado</TabsTrigger>
        </TabsList>
        <TabsContent value="todos" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {municipalities.map((municipality) => (
              <MunicipalityCard key={municipality.id} municipality={municipality} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="nao-protocolado" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {municipalities
              .filter((m) => m.aprovados === 0)
              .map((municipality) => (
                <MunicipalityCard key={municipality.id} municipality={municipality} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="protocolado" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {municipalities
              .filter((m) => m.aprovados > 0 && m.aprovados < 3)
              .map((municipality) => (
                <MunicipalityCard key={municipality.id} municipality={municipality} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="aprovado" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {municipalities
              .filter((m) => m.aprovados >= 3)
              .map((municipality) => (
                <MunicipalityCard key={municipality.id} municipality={municipality} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MunicipalityCard({ municipality }: { municipality: any }) {
  return (
    <Card className="overflow-hidden bg-[#121212] border-[#333333]">
      <CardHeader className="p-0">
        <div className="relative h-[150px] w-full">
          <Image
            src="/placeholder.svg"
            alt={`Cidade de ${municipality.nome}`}
            fill
            className="object-cover"
          />
          {municipality.aprovados > 2 && (
            <div className="absolute right-2 top-2">
              <Badge className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                <Award className="mr-1 h-3 w-3" /> Destaque
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{municipality.nome}</h3>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-[#8B0000]">{municipality.aprovados} PLs Aprovados</div>
            <div className="text-sm text-muted-foreground">{municipality.leads.length} Apoiadores</div>
            <div className="text-sm text-muted-foreground">{municipality.vereadores.length} Vereadores Aliados</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/municipios/${municipality.id}`} className="w-full">
          <div className="w-full rounded-md bg-[#8B0000] px-4 py-2 text-center font-medium text-white hover:bg-[#8B0000]/90">
            Ver detalhes
          </div>
        </Link>
      </CardFooter>
    </Card>
  )
}
