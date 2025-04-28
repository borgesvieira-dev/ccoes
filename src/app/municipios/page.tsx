import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { MunicipalityList } from "@/components/municipios-list"

export default function MunicipiosPage() {
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Municípios Participantes</h1>
        <p className="text-muted-foreground">
          Conheça os municípios que aprovaram Projetos de Lei contra o crime organizado.
        </p>
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar por município"
          className="w-full bg-background pl-8 md:max-w-sm"
        />
      </div>
      <MunicipalityList />
    </div>
  )
}
