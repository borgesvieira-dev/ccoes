import Link from "next/link"
import { Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedMunicipalities } from "@/components/featured-municipalities"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full bg-[#8B0000] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Central de Combate ao Crime Organizado no Espírito Santo
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-white/90 md:text-2xl">
                  Conheça os municípios e vereadores que estão na linha de frente contra o crime organizado.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/municipios">
                  <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 cursor-pointer">
                    Veja como combater o Crime Organizado!
                  </Button>
                </Link>
                <Link href="/cadastro">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 cursor-pointer">
                    Junte-se a nós
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#8B0000] p-2 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Municípios em Destaque</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os municípios que já aprovaram Projetos de Lei para combater o crime organizado.
                </p>
              </div>
            </div>
            <FeaturedMunicipalities />
          </div>
        </section>
        <section className="w-full bg-[#4B4B4B] py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Faça parte desta iniciativa
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cadastre-se para receber atualizações e participar ativamente no combate ao crime organizado.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/cadastro">
                <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90 cursor-pointer">Cadastre-se Agora</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
