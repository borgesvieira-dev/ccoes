// hooks/useMunicipios.ts
import { Municipio, Prisma } from "../../generated/prisma" // ou ajuste se precisar
import { useState, useEffect } from "react"
import { toast } from "sonner"

type MInclude = Prisma.MunicipioGetPayload<{ include: { vereadores: true, leads: true } }>

export function useMunicipios() {
  const [municipios, setMunicipios] = useState<MInclude[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMunicipios = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/municipios")
      if (!response.ok) throw new Error("Erro ao buscar municípios")
      const data = await response.json()
      setMunicipios(data)
    } catch (err: any) {
      setError(err.message || "Erro ao buscar municípios")
      toast.error("Erro ao buscar municípios")
    } finally {
      setLoading(false)
    }
  }

  const addMunicipio = async (municipio: Municipio) => {
    try {
      const response = await fetch("/api/municipios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(municipio),
      })
      if (!response.ok) throw new Error("Erro ao adicionar município")
      const newMunicipio = await response.json()
      setMunicipios((prev) => [...prev, newMunicipio])
      toast.success("Município adicionado com sucesso")
    } catch (err) {
      toast.error("Erro ao adicionar município")
    }
  }

  const updateMunicipio = async (id: number, municipio: Municipio) => {
    try {
      const response = await fetch(`/api/municipios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(municipio),
      })
      if (!response.ok) throw new Error("Erro ao atualizar município")
      const updatedMunicipio = await response.json()
      setMunicipios((prev) =>
        prev.map((m) => (m.id === id ? updatedMunicipio : m))
      )
      toast.success("Município atualizado com sucesso")
    } catch (err) {
      toast.error("Erro ao atualizar município")
    }
  }

  const deleteMunicipio = async (id: number) => {
    try {
      const response = await fetch(`/api/municipios/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("Erro ao remover município")
      setMunicipios((prev) => prev.filter((m) => m.id !== id))
      toast.success("Município removido com sucesso")
    } catch (err) {
      toast.error("Erro ao remover município")
    }
  }

  useEffect(() => {
    fetchMunicipios()
  }, [])

  return {
    municipios,
    loading,
    error,
    fetchMunicipios,
    addMunicipio,
    updateMunicipio,
    deleteMunicipio,
  }
}
