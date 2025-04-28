"use client"

import type React from "react"

import { useState } from "react"
import { Building, FileText, LogIn, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminMunicipalities } from "@/components/admin-municipalities"
import { AdminCouncilors } from "@/components/admin-councilors"
import { AdminContacts } from "@/components/admin-contacts"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Em uma aplicação real, verificaríamos as credenciais
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-8 md:px-6">
        <Card className="w-full max-w-md bg-[#121212] border-[#333333]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Área Administrativa</CardTitle>
            <CardDescription>Entre com suas credenciais para acessar o painel administrativo.</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90">
                <LogIn className="mr-2 h-4 w-4" />
                Entrar
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Painel Administrativo</h1>
        <p className="text-muted-foreground">Gerencie municípios, vereadores e contatos da plataforma.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 no último mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Vereadores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+5 no último mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">PL´s aprovados</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+8 no último mês</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="municipios">
        <TabsList className="mb-4">
          <TabsTrigger value="municipios">Municípios</TabsTrigger>
          <TabsTrigger value="vereadores">Vereadores</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
        <TabsContent value="municipios" className="mt-0">
          <AdminMunicipalities />
        </TabsContent>
        <TabsContent value="vereadores" className="mt-0">
          <AdminCouncilors />
        </TabsContent>
        <TabsContent value="leads" className="mt-0">
          <AdminContacts />
        </TabsContent>
      </Tabs>
    </div>
  )
}
