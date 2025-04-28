import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-black py-6 text-white">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-[#FFD700]" />
          <span className="text-lg font-bold">CCOES</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm hover:text-[#FFD700]">
            Início
          </Link>
          <Link href="/municipios" className="text-sm hover:text-[#FFD700]">
            Municípios
          </Link>
          <Link href="/cadastro" className="text-sm hover:text-[#FFD700]">
            Cadastro
          </Link>
          <Link href="/admin" className="text-sm hover:text-[#FFD700]">
            Área Administrativa
          </Link>
        </nav>
        <div className="text-sm text-white/60">© 2023 Central de Combate. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}
