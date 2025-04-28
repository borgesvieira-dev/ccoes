"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Award, Facebook, FileText, Instagram, Mail, MapPin, Phone, Twitter, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

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

export function CouncilorModal({ id, isOpen, onClose }: { id: number; isOpen: boolean; onClose: () => void }) {
  const router = useRouter()
  const [currentCouncilor, setCurrentCouncilor] = useState<any>(null)

  useEffect(() => {
    // Em uma aplicação real, buscaríamos os dados do vereador com base no ID
    // Aqui estamos usando dados de exemplo
    if (isOpen) {
      setCurrentCouncilor(councilor)
    }
  }, [isOpen, id])

  const handleClose = () => {
    onClose()
    // Opcional: navegar de volta para a página anterior
    // router.back()
  }

  if (!currentCouncilor) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <DialogTitle className="text-2xl">{currentCouncilor.name}</DialogTitle>
            {currentCouncilor.isFeatured && (
              <Badge className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                <Award className="mr-1 h-3 w-3" /> Vereador Destaque
              </Badge>
            )}
          </div>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </Button>
          </DialogClose>
        </DialogHeader>

        <div className="grid gap-6 lg:grid-cols-3 mt-4">
          <div className="lg:col-span-1">
            <Card className="bg-[#121212] border-[#333333]">
              <div className="flex justify-center p-6">
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-[#8B0000]">
                  <Image
                    src={currentCouncilor.image || "/placeholder.svg"}
                    alt={`Vereador ${currentCouncilor.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{currentCouncilor.name}</h2>
                  <p className="text-lg font-medium text-[#8B0000]">{currentCouncilor.party}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {currentCouncilor.municipality.name} - {currentCouncilor.municipality.state}
                  </div>
                </div>

                <div className="flex justify-center gap-2">
                  {currentCouncilor.socialMedia.instagram && (
                    <Link href={currentCouncilor.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                  )}
                  {currentCouncilor.socialMedia.facebook && (
                    <Link href={currentCouncilor.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </Link>
                  )}
                  {currentCouncilor.socialMedia.twitter && (
                    <Link href={currentCouncilor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
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
                    <span className="text-sm">{currentCouncilor.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#8B0000]" />
                    <span className="text-sm">{currentCouncilor.contact.phone}</span>
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
                <Card className="bg-[#121212] border-[#333333]">
                  <CardHeader>
                    <CardTitle>Biografia</CardTitle>
                    <CardDescription>Conheça mais sobre o vereador {currentCouncilor.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{currentCouncilor.biography}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="projetos" className="mt-0">
                <div className="space-y-4">
                  {currentCouncilor.approvedLaws.map((law: any) => (
                    <Card key={law.id} className="bg-[#121212] border-[#333333]">
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
      </DialogContent>
    </Dialog>
  )
}
