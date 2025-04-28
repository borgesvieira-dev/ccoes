"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function CadastroPage() {
  const { toast } = useToast()
  const [municipios, setMunicipios] = useState([]);
  useEffect(() => {
    const fetchMunicipios = async () => {
      try {
        const res = await fetch("/api/ibge");
        const data = await res.json();

        // const municipiosList = data.map(m => ({ id: m.id, nome: m.nome }))

        setMunicipios(data);
      } catch (error) {
        console.error("Erro ao buscar municípios:", error);
      }
    };

    fetchMunicipios();
  }, []);

  const formatPhone = (phone: string) => {
    phone = phone.replace(/\D/g, ""); // Remove tudo que não for número

    if (phone.length <= 10) {
      // Formato para telefones fixos: (99) 9999-9999
      return phone.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      // Formato para celulares: (99) 99999-9999
      return phone.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  };

  const [formData, setFormData] = useState({
    nome: "",
    partido: "",
    email: "",
    whatsapp: "",
    bairro: "",
    municipio: "",
    message: "",
    type: "cidadao",
  })

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "whatsapp") {
      newValue = formatPhone(value); // aplica a máscara só no campo whatsapp
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload =
      formData.type === "vereador"
        ? {
          nome: formData.nome,
          whatsapp: formData.whatsapp.replace(/\D/g, ""), // envia só números
          email: formData.email,
          partido: formData.partido,
          municipio: formData.municipio,
        }
        : {
          nome: formData.nome,
          whatsapp: formData.whatsapp.replace(/\D/g, ""),
          email: formData.email,
          bairro: formData.bairro,
          municipio: formData.municipio,
          message: formData.message,
        };

    console.log(payload)

    try {
      const endpoint = formData.type === "vereador" ? "/api/vereadores" : "/api/leads";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados.");
      }

      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        nome: "",
        email: "",
        partido: "",
        whatsapp: "",
        bairro: "",
        municipio: "",
        message: "",
        type: "cidadao",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro no cadastro",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container flex flex-col items-center px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 flex flex-col items-center space-y-4 text-center">
        <div className="inline-block rounded-lg bg-[#8B0000] p-2 text-white">
          <Shield className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Cadastre-se</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Junte-se à nossa rede de apoiadores no combate ao crime organizado.
        </p>
      </div>

      <Card className="w-full max-w-md bg-[#121212] border-[#333333]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Formulário de Cadastro</CardTitle>
            <CardDescription>Preencha seus dados para receber informações e participar ativamente.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="type">Você é:</Label>
              <RadioGroup
                id="type"
                value={formData.type}
                onValueChange={handleRadioChange}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cidadao" id="cidadao" />
                  <Label htmlFor="cidadao">Cidadão</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vereador" id="vereador" />
                  <Label htmlFor="vereador">Vereador</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="outro" id="outro" />
                  <Label htmlFor="outro">Outro</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input id="nome" name="nome" type="text" value={formData.nome} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input id="whatsapp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="municipio">Município</Label>
                <select
                  id="municipio"
                  name="municipio"
                  value={formData.municipio}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione um município</option>
                  {municipios.map((municipio: any) => (
                    <option key={municipio.id} value={municipio.id}>
                      {municipio.nome}
                    </option>
                  ))}
                </select>
              </div>

              {formData.type !== "vereador" ? (
                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input id="bairro" name="bairro" type="text" value={formData.bairro} onChange={handleChange} required />
                </div>
              ) : <div className="space-y-2">
                <Label htmlFor="partido">Partido</Label>
                <Input id="partido" name="partido" type="text" value={formData.partido} onChange={handleChange} required />
              </div>
              }
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90">
              Cadastrar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
