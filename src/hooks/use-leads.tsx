import { Prisma } from "../../generated/prisma"
import { useEffect, useState } from "react"
import { toast } from "sonner"

type LInclude = Prisma.LeadGetPayload<{ include: { municipio: true } }>

export function useLeads() {
  const [leads, setLeads] = useState<LInclude[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/leads")
      if (!response.ok) throw new Error("Erro ao buscar leads")
      const data = await response.json()
      setLeads(data)
    } catch (err: any) {
      setError(err.message || "Erro ao buscar leads")
      toast.error("Erro ao buscar leads")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  return {
    leads,
    fetchLeads,
    loading,
    error
  }
}