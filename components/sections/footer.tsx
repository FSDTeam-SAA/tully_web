'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const links = [
    { label: 'About', href: '#home' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#security' },
    { label: 'Terms of Service', href: '#security' },
    { label: 'For Schools', href: '#schools' },
  ]

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
              width={120}
              height={48}
              className="h-10 w-auto brightness-[1.6]"
            />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs md:text-sm">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-[#ced4df] transition-colors hover:text-white">
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
