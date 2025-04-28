"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Shield, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-[#8B0000]" />
          <span className="text-lg font-bold">CCOES</span>
        </Link>
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isMenuOpen && (
              <div className="absolute left-0 top-16 z-50 w-full bg-black p-4 shadow-md">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-[#8B0000]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                  <Link
                    href="/municipios"
                    className="text-lg font-medium hover:text-[#8B0000]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Municípios
                  </Link>
                  <Link
                    href="/cadastro"
                    className="text-lg font-medium hover:text-[#8B0000]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cadastro
                  </Link>
                  <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90">Área Administrativa</Button>
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-[#8B0000]">
              Início
            </Link>
            <Link href="/municipios" className="text-sm font-medium hover:text-[#8B0000]">
              Municípios
            </Link>
            <Link href="/cadastro" className="text-sm font-medium hover:text-[#8B0000]">
              Cadastro
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
