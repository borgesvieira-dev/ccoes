import Link from "next/link"
import Image from "next/image"
import { Award, ChevronLeft, Facebook, FileText, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo - em uma aplicação real, estes viriam de uma API ou banco de dados
const councilor = {
  id: 1,
  name: "Carlos Silva",
  party: "PSD",
  municipality: {
    id: 1,
    name: "São Paulo",
    state: "SP",
  },
  isFeatured: true,
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
  ],
  biography:
    "Carlos Silva é vereador pelo município de São Paulo desde 2020. Formado em Direito, tem como principais bandeiras o combate ao crime organizado e a segurança pública. Já aprovou diversos projetos de lei relacionados a estes temas.",
  contact: {
    email: "carlos.silva@camara.sp.gov.br",
    phone: "(11) 3333-4444",
  },
  socialMedia: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  image: "/placeholder.svg?height=300&width=300",
}

export default async function VereadorDetalhesPage({ params }: { params: Promise<{ id: string }> }) {
  // Em uma aplicação real, buscaríamos os dados do vereador com base no ID
  const { id } = await params
  const councilorId = Number.parseInt(id)

  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center gap-2">
        <Link href={`/municipios/${councilor.municipality.id}`}>
          <Button variant="ghost" size="sm" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{councilor.name}</h1>
        {councilor.isFeatured && (
          <Badge className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
            <Award className="mr-1 h-3 w-3" /> Vereador Destaque
          </Badge>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <div className="flex justify-center p-6">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-[#8B0000]">
                <Image
                  src={councilor.image || "/placeholder.svg"}
                  alt={`Vereador ${councilor.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold">{councilor.name}</h2>
                <p className="text-lg font-medium text-[#8B0000]">{councilor.party}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {councilor.municipality.name} - {councilor.municipality.state}
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {councilor.socialMedia.instagram && (
                  <Link href={councilor.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                )}
                {councilor.socialMedia.facebook && (
                  <Link href={councilor.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </Link>
                )}
                {councilor.socialMedia.twitter && (
                  <Link href={councilor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                )}
              </div>

              <div className="space-y-2 rounded-lg bg-muted p-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#8B0000]" />
                  <span className="text-sm">{councilor.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#8B0000]" />
                  <span className="text-sm">{councilor.contact.phone}</span>
                </div>
              </div>

              <Button className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90">Entrar em contato</Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="biografia">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="biografia">Biografia</TabsTrigger>
              <TabsTrigger value="projetos">Projetos de Lei</TabsTrigger>
            </TabsList>
            <TabsContent value="biografia" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Biografia</CardTitle>
                  <CardDescription>Conheça mais sobre o vereador {councilor.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{councilor.biography}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="projetos" className="mt-0">
              <div className="space-y-4">
                {councilor.approvedLaws.map((law) => (
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
