import Link from "next/link"
import Image from "next/image"
import { Award, ChevronLeft, FileText, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CouncilorList } from "@/components/councilor-list"

// Dados de exemplo - em uma aplicação real, estes viriam de uma API ou banco de dados
const municipalityData = {
  id: 1,
  name: "São Paulo",
  state: "SP",
  population: "12.3 milhões",
  region: "Sudeste",
  approvedLaws: [
    {
      id: 1,
      number: "PL 123/2023",
      title: "Combate ao Crime Organizado nas Escolas",
      date: "15/03/2023",
      description:
        "Projeto de lei que visa implementar medidas de prevenção e combate ao crime organizado nas escolas municipais.",
    },
    {
      id: 2,
      number: "PL 145/2023",
      title: "Monitoramento de Áreas de Risco",
      date: "22/05/2023",
      description:
        "Projeto de lei que estabelece o monitoramento de áreas de risco para prevenção de atividades criminosas.",
    },
    {
      id: 3,
      number: "PL 178/2023",
      title: "Transparência em Contratos Públicos",
      date: "10/07/2023",
      description:
        "Projeto de lei que aumenta a transparência em contratos públicos para evitar infiltração do crime organizado.",
    },
  ],
  image: "/placeholder.svg?height=300&width=500",
}

export default async function MunicipioDetalhesPage({ params }: { params: Promise<{ id: string }> }) {
  // Em uma aplicação real, buscaríamos os dados do município com base no ID

  const { id } = await params
  const municipalityId = Number.parseInt(id)

  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center gap-2">
        <Link href="/municipios">
          <Button variant="ghost" size="sm" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {municipalityData.name} - {municipalityData.state}
        </h1>
        <Badge className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
          <Award className="mr-1 h-3 w-3" /> Destaque
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-lg">
              <Image
                src={municipalityData.image || "/placeholder.svg"}
                alt={`Cidade de ${municipalityData.name}`}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#8B0000]" />
                  <span className="text-sm">Região {municipalityData.region}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm font-medium">População:</span>
                  <span className="text-sm">{municipalityData.population}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm font-medium">Projetos de Lei:</span>
                  <span className="text-sm font-bold text-[#8B0000]">{municipalityData.approvedLaws.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="vereadores">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="vereadores">Vereadores</TabsTrigger>
              <TabsTrigger value="projetos">Projetos de Lei</TabsTrigger>
            </TabsList>
            <TabsContent value="vereadores" className="mt-0">
              <CouncilorList municipalityId={municipalityId} />
            </TabsContent>
            <TabsContent value="projetos" className="mt-0">
              <div className="space-y-4">
                {municipalityData.approvedLaws.map((law) => (
                  <Card key={law.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-[#8B0000]" />
                            {law.number}
                          </CardTitle>
                          <CardDescription>{law.title}</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">{law.date}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{law.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
