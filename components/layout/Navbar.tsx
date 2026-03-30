'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projetos', href: '/projects' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contact' },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-[#020617]/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-lg font-bold tracking-wider transition hover:opacity-90">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
              Anderson.dev
            </span>
          </h1>
        </Link>

        {/* MENU */}
        <nav className="flex gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition duration-300 ${
                  isActive
                    ? 'text-white scale-105'
                    : 'text-zinc-400 hover:text-white hover:scale-105'
                }`}
              >
                {link.name}

                {/* LINHA + GLOW */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                    isActive
                      ? 'w-full shadow-[0_0_8px_rgba(168,85,247,0.7)]'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}