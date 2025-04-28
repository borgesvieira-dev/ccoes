"use client"
import type React from "react"
import { useState } from "react"
import { Edit, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { useVereadores } from "@/hooks/use-vereadores"

// Dados de exemplo - em uma aplicação real, estes viriam de uma API ou banco de dados
export function AdminCouncilors() {
  const { vereadores } = useVereadores()
  const { toast } = useToast()
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentCouncilor, setCurrentCouncilor] = useState<any>(null)
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    partido: "",
    municipio: "",
    destaque: false,
    aprovacoes: 0,
    protocolados: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "aprovados" ? Number.parseInt(value) || 0 : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isFeatured: checked }))
  }

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newCouncilor = {
      id: vereadores.length + 1,
      ...formData,
    }
    setFormData({
      nome: "",
      whatsapp: "",
      email: "",
      partido: "",
      municipio: "",
      destaque: false,
      aprovacoes: 0,
      protocolados: 0
    })
    setIsAddDialogOpen(false)
    toast({
      title: "Vereador adicionado",
      description: `${formData.nome} foi adicionado com sucesso.`,
    })
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsEditDialogOpen(false)
    toast({
      title: "Vereador atualizado",
      description: `${formData.nome} foi atualizado com sucesso.`,
    })
  }

  const handleDelete = (id: number) => {

    toast({
      title: "Vereador removido",
      description: "O vereador foi removido com sucesso.",
    })
  }

  const openEditDialog = (councilor: any) => {
    setCurrentCouncilor(councilor)
    setFormData({
      nome: councilor.nome,
      whatsapp: councilor.whatsapp,
      email: councilor.email,
      partido: councilor.partido,
      municipio: councilor.municipio,
      destaque: councilor.destacado,
      aprovacoes: councilor.aprovacoes,
      protocolados: councilor.protocolados,
    })
    setIsEditDialogOpen(true)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Vereadores</CardTitle>
          <CardDescription>Gerencie os vereadores cadastrados na plataforma.</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="ml-auto bg-[#8B0000] hover:bg-[#8B0000]/90">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Vereador
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleAddSubmit}>
              <DialogHeader>
                <DialogTitle>Adicionar Vereador</DialogTitle>
                <DialogDescription>Preencha os dados do novo vereador.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="nome" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="partido" className="text-right">
                    Partido
                  </Label>
                  <Input
                    id="partido"
                    name="partido"
                    value={formData.partido}
                    onChange={handleChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="aprovacoes" className="text-right">
                    PLs Aprovados
                  </Label>
                  <Input
                    id="aprovacoes"
                    name="aprovacoes"
                    type="number"
                    value={formData.aprovacoes}
                    onChange={handleChange}
                    className="col-span-3"
                    min={0}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="destaque" className="text-right">
                    Destaque
                  </Label>
                  <div className="col-span-3 flex items-center space-x-2">
                    <Switch id="destaque" checked={formData.destaque} onCheckedChange={handleSwitchChange} />
                    <Label htmlFor="destaque">{formData.destaque ? "Sim" : "Não"}</Label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-[#8B0000] hover:bg-[#8B0000]/90">
                  Adicionar
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <form onSubmit={handleEditSubmit}>
              <DialogHeader>
                <DialogTitle>Editar Vereador</DialogTitle>
                <DialogDescription>Atualize os dados do vereador.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="edit-name"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-party" className="text-right">
                    Partido
                  </Label>
                  <Input
                    id="edit-party"
                    name="partido"
                    value={formData.partido}
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
                    name="aprovacoes"
                    type="number"
                    value={formData.aprovacoes}
                    onChange={handleChange}
                    className="col-span-3"
                    min={0}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-isFeatured" className="text-right">
                    Destaque
                  </Label>
                  <div className="col-span-3 flex items-center space-x-2">
                    <Switch id="edit-isFeatured" checked={formData.destaque} onCheckedChange={handleSwitchChange} />
                    <Label htmlFor="edit-isFeatured">{formData.destaque ? "Sim" : "Não"}</Label>
                  </div>
                </div>
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
              <TableHead>Partido</TableHead>
              <TableHead>Município</TableHead>
              <TableHead>PLs</TableHead>
              <TableHead>Destaque</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vereadores.map((v) => (
              <TableRow key={v.id}>
                <TableCell className="font-medium">{v.nome}</TableCell>
                <TableCell>{v.partido}</TableCell>
                <TableCell>{v.municipio.nome}</TableCell>
                <TableCell>{v.aprovacoes}</TableCell>
                <TableCell>{v.destaque ? "Sim" : "Não"}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(v)}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(v.id)}>
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Excluir</span>
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
