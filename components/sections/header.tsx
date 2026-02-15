'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Schools', href: '#schools' },
    { label: 'Pricing', href: '#pricing' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled || isOpen
          ? 'bg-white border-b border-primary/20 shadow-sm'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60px] md:h-[72px] flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-shrink-0"
        >
          <a href="#home" className="inline-flex items-center">
            <Image
              src="/images/logo_tully.png"
              alt="Tully logo"
              width={132}
              height={52}
              priority
              className="h-8 w-auto md:h-9"
            />
          </a>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block"
        >
          <Button asChild className="text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            <a href="#ready-to-plan">Download</a>
          </Button>
        </motion.div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <Menu className="w-6 h-6 text-gray-900" />
            </motion.button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[84%] max-w-[340px] border-l border-primary/20 bg-[#f8f5ef] px-6 py-10"
          >
            <div className="mb-8">
              <Image
                src="/images/logo_tully.png"
                alt="Tully logo"
                width={132}
                height={52}
                className="h-8 w-auto"
              />
            </div>

            <div className="space-y-4">
              {navItems.map((item) => (
                <SheetClose key={item.label} asChild>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </div>

            <div className="mt-8">
              <SheetClose asChild>
                <Button asChild className="w-full rounded-md px-4 py-2.5 text-sm font-semibold text-white">
                  <a href="#ready-to-plan">Download</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
