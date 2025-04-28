"use client"

import { useState } from "react"
import { Eye, Mail, Phone, Trash, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { useLeads } from "@/hooks/use-leads"

export function AdminContacts() {
  const { toast } = useToast()
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [currentContact, setCurrentContact] = useState<any>(null)

  const {
    leads,
    fetchLeads,
    loading,
    error
  } = useLeads()

  const handleDelete = (id: number) => {
    toast({
      title: "Contato removido",
      description: "O contato foi removido com sucesso.",
    })
  }

  const openViewDialog = (contact: any) => {
    setCurrentContact(contact)
    setIsViewDialogOpen(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads</CardTitle>
        <CardDescription>Gerencie os leads recebidos através do formulário de cadastro.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Cidade/Estado</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((l) => (
              <TableRow key={l.id}>
                <TableCell className="font-medium">{l.nome}</TableCell>
                <TableCell>{l.email}</TableCell>
                <TableCell>{l.whatsapp}</TableCell>
                <TableCell>{`${l.municipio.nome}`}</TableCell>
                <TableCell>{l.type}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openViewDialog(l)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Ver</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(l.id)}>
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Excluir</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Detalhes do Contato</DialogTitle>
              <DialogDescription>Informações completas do contato.</DialogDescription>
            </DialogHeader>
            {currentContact && (
              <div className="space-y-4 py-4">
                <div className="flex items-center gap-2 border-b pb-2">
                  <User className="h-4 w-4 text-[#8B0000]" />
                  <span className="font-medium">Nome:</span>
                  <span>{currentContact.name}</span>
                </div>
                <div className="flex items-center gap-2 border-b pb-2">
                  <Mail className="h-4 w-4 text-[#8B0000]" />
                  <span className="font-medium">E-mail:</span>
                  <span>{currentContact.email}</span>
                </div>
                <div className="flex items-center gap-2 border-b pb-2">
                  <Phone className="h-4 w-4 text-[#8B0000]" />
                  <span className="font-medium">Telefone:</span>
                  <span>{currentContact.phone}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b pb-2">
                  <div>
                    <span className="font-medium">Cidade:</span>
                    <span className="ml-2">{currentContact.city}</span>
                  </div>
                  <div>
                    <span className="font-medium">Estado:</span>
                    <span className="ml-2">{currentContact.state}</span>
                  </div>
                </div>
                <div className="border-b pb-2">
                  <span className="font-medium">Tipo:</span>
                  <span className="ml-2">{currentContact.type}</span>
                </div>
                <div className="border-b pb-2">
                  <span className="font-medium">Data:</span>
                  <span className="ml-2">{currentContact.date}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-medium">Mensagem:</span>
                  <p className="rounded-md bg-muted p-3 text-sm">{currentContact.message}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
