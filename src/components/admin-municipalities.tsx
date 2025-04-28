import type React from "react"

import { useState } from "react"
import { Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { Municipio } from "../../generated/prisma"
import { useMunicipios } from "@/hooks/use-municipios"

export function AdminMunicipalities() {
  const {
    municipios,
    updateMunicipio,
    deleteMunicipio,
  } = useMunicipios()

  const { toast } = useToast()
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentMunicipality, setCurrentMunicipality] = useState<Municipio | null>(null)
  const [formData, setFormData] = useState({
    nome: "",
    img: "",
    uf: "ES",
    aprovados: 0,
    protocolados: 0,
    destaque: false,
    sitePrefeitura: "",
    siteCamara: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "habitantes" || name === "pls_aprovados"
          ? Number.parseInt(value) || 0
          : value,
    }))
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentMunicipality) return

    updateMunicipio(currentMunicipality.id, {
      id: currentMunicipality.id,
      ...formData,
      sitePrefeitura: formData.sitePrefeitura || null,
      siteCamara: formData.siteCamara || null,
      aprovados: 0,
      protocolados: 0,
      destaque: false
    })


    setIsEditDialogOpen(false)
    toast({
      title: "Município atualizado",
      description: `${formData.nome} foi atualizado com sucesso.`,
    })
  }

  const openEditDialog = (municipality: Municipio) => {
    setCurrentMunicipality(municipality)
    setFormData({
      nome: municipality.nome,
      img: municipality.img || "",
      uf: municipality.uf,
      aprovados: municipality.aprovados,
      protocolados: municipality.protocolados,
      destaque: municipality.destaque,
      sitePrefeitura: municipality.sitePrefeitura || "",
      siteCamara: municipality.siteCamara || "",
    })
    setIsEditDialogOpen(true)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Municípios</CardTitle>
          <CardDescription>Gerencie os municípios cadastrados na plataforma.</CardDescription>
        </div>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <form onSubmit={handleEditSubmit}>
              <DialogHeader>
                <DialogTitle>Editar Município</DialogTitle>
                <DialogDescription>Atualize os dados do município.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="edit-name"
                    name="name"
                    value={formData.nome}
                    onChange={handleChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-state" className="text-right">
                    Estado
                  </Label>
                  <Input
                    id="edit-state"
                    name="state"
                    value={formData.uf}
                    onChange={handleChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-approvedLaws" className="text-right">
                    PLs Aprovados
                  </Label>
                  <Input
                    id="edit-approvedLaws"
                    name="approvedLaws"
                    type="number"
                    value={formData.aprovados}
                    onChange={handleChange}
                    className="col-span-3"
                    min={0}
                  />
                </div>
                {/* <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-featuredCouncilors" className="text-right">
                    Vereadores
                  </Label>
                  <Input
                    id="edit-featuredCouncilors"
                    name="featuredCouncilors"
                    type="number"
                    value={formData.featuredCouncilors}
                    onChange={handleChange}
                    className="col-span-3"
                    min={0}
                  />
                </div> */}
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-[#8B0000] hover:bg-[#8B0000]/90">
                  Salvar Alterações
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Leads</TableHead>
              <TableHead>Vereadores</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {municipios.map((municipio) => (
              <TableRow key={municipio.id}>
                <TableCell className="font-medium">{municipio.nome}</TableCell>
                <TableCell>{municipio.leads?.length || 0}</TableCell>
                <TableCell>{municipio.vereadores?.length || 0}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog({
                      ...municipio,
                      sitePrefeitura: municipio.sitePrefeitura ?? null,
                      siteCamara: municipio.siteCamara ?? null,
                    })}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
