"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Award, ExternalLink, Facebook, Instagram, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CouncilorModal } from "@/components/councilor-modal"

// Dados de exemplo - em uma aplicação real, estes viriam de uma API ou banco de dados
const councilors = [
  {
    id: 1,
    name: "Carlos Silva",
    party: "PSD",
    municipality: 1,
    isFeatured: true,
    approvedLaws: 2,
    image: "/placeholder.svg?height=150&width=150",
    socialMedia: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Maria Oliveira",
    party: "PT",
    municipality: 1,
    isFeatured: true,
    approvedLaws: 1,
    image: "/placeholder.svg?height=150&width=150",
    socialMedia: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 3,
    name: "João Santos",
    party: "MDB",
    municipality: 2,
    isFeatured: false,
    approvedLaws: 2,
    image: "/placeholder.svg?height=150&width=150",
    socialMedia: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Ana Pereira",
    party: "PSDB",
    municipality: 3,
    isFeatured: true,
    approvedLaws: 3,
    image: "/placeholder.svg?height=150&width=150",
    socialMedia: {
      facebook: "https://facebook.com",
    },
  },
]

export function CouncilorList({ municipalityId }: { municipalityId: number }) {
  const [selectedCouncilorId, setSelectedCouncilorId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filtra os vereadores pelo município
  const filteredCouncilors = councilors.filter((councilor) => councilor.municipality === municipalityId)

  const handleOpenModal = (id: number) => {
    setSelectedCouncilorId(id)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (filteredCouncilors.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <p className="text-muted-foreground">Nenhum vereador cadastrado para este município.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {filteredCouncilors.map((councilor) => (
          <Card key={councilor.id} className="overflow-hidden bg-[#121212] border-[#333333]">
            <CardHeader className="p-0">
              <div className="flex items-center gap-4 bg-[#4B4B4B] p-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src={councilor.image || "/placeholder.svg"}
                    alt={`Vereador ${councilor.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-bold">{councilor.name}</h3>
                  <p className="text-sm">{councilor.party}</p>
                </div>
                {councilor.isFeatured && (
                  <Badge className="ml-auto bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                    <Award className="mr-1 h-3 w-3" /> Destaque
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-[#8B0000]">{councilor.approvedLaws}</span> Projetos de Lei aprovados
                </div>
                <div className="flex gap-2">
                  {councilor.socialMedia.instagram && (
                    <Link href={councilor.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                  )}
                  {councilor.socialMedia.facebook && (
                    <Link href={councilor.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </Link>
                  )}
                  {councilor.socialMedia.twitter && (
                    <Link href={councilor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90"
                onClick={() => handleOpenModal(councilor.id)}
              >
                Entrar em contato
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedCouncilorId && (
        <CouncilorModal id={selectedCouncilorId} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  )
}
