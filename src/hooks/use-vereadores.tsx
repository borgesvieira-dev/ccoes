import { Prisma } from "../../generated/prisma"
import { useEffect, useState } from "react"
import { toast } from "sonner"

type VInclude = Prisma.VereadorGetPayload<{ include: { municipio: true } }>

export function useVereadores() {
  const [vereadores, setVereadores] = useState<VInclude[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchVereadores = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/vereadores")
      if (!response.ok) throw new Error("Erro ao buscar vereadores")
      const data = await response.json()
      setVereadores(data)
    } catch (err) {
      setError("Erro ao buscar vereadores: " + err)
      toast.error("Erro ao buscar vereadores")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVereadores()
  }, [])

  return {
    vereadores,
    fetchVereadores,
    loading,
    error
  }
}