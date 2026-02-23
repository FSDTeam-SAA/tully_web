'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { type MouseEvent } from 'react'

export default function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'The Problem', href: '#problem' },
    { label: 'The Solution', href: '#solution' },
    { label: 'How It Works', href: '#timeline' },
    { label: 'Key Features', href: '#features' },
    { label: 'For Schools', href: '#schools' },
    { label: 'Security & Ethics', href: '#security' },
  ]

  const handleAnchorClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return

    const targetId = href.slice(1)
    const target = document.getElementById(targetId)
    if (!target) return

    event.preventDefault()

    const headerOffset = window.innerWidth >= 1024 ? 88 : 76
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })
    window.history.replaceState(null, '', href)
  }

  return (
    <footer
      className="bg-cover bg-center bg-no-repeat py-10 text-white"
      style={{ backgroundImage: "url('/images/footer_bg.png')" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center justify-between gap-5 md:flex-row"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo_tully.png"
              alt="Tully logo"
              width={200}
              height={208}
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs md:text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleAnchorClick(link.href)}
                className="text-[#ced4df] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>

        <div className="mt-6 border-t border-[#1e2532] pt-4 text-center text-xs text-[#8f98a8]">
          Tully (c) 2026
        </div>
      </div>
    </footer>
  )
}
