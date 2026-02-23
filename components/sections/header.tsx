'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState, type MouseEvent } from 'react'
import { useTheme } from 'next-themes'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'The Problem', href: '#problem' },
    { label: 'The Solution', href: '#solution' },
    { label: 'How Tully Works', href: '#timeline' },
    { label: 'Who Tully Is For', href: '#who-its-for' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

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
    setIsOpen(false)
  }

  const isDark = resolvedTheme === 'dark'

  const handleThemeToggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled || isOpen
          ? 'border-b border-primary/20 bg-white/95 shadow-sm dark:border-[#243449] dark:bg-[#0f1724]/95'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-shrink-0"
        >
          <a href="#home" onClick={handleAnchorClick('#home')} className="inline-flex items-center">
            <span className="relative block h-8 w-[84px] md:h-9 md:w-[95px]">
              <Image
                src="/images/logo_tully.png"
                alt="Tully logo"
                fill
                priority
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/logo_tully_footer.png"
                alt="Tully logo"
                fill
                priority
                className="hidden object-contain dark:block"
              />
            </span>
          </a>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={handleAnchorClick(item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
              className="text-sm font-medium text-[#334155] transition-colors duration-300 hover:text-primary dark:text-[#d5deed] dark:hover:text-[#f8b03d]"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden items-center gap-3 md:flex"
        >
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d5dbe4] bg-white/85 text-[#334155] transition-colors hover:bg-white dark:border-[#2b3a4f] dark:bg-[#101a29] dark:text-[#dce5f3] dark:hover:bg-[#172334]"
          >
            {mounted && isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
          <Button asChild className="rounded-md px-6 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md">
            <a href="#ready-to-plan" onClick={handleAnchorClick('#ready-to-plan')}>Download</a>
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
              <Menu className="h-6 w-6 text-gray-900 dark:text-[#e2e8f4]" />
            </motion.button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[84%] max-w-[340px] border-l border-primary/20 bg-[#f8f5ef] px-6 py-10 dark:border-[#2b3a4f] dark:bg-[#0f1724]"
          >
            <div className="mb-8">
              <span className="relative block h-8 w-[84px]">
                <Image
                  src="/images/logo_tully.png"
                  alt="Tully logo"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/logo_tully_footer.png"
                  alt="Tully logo"
                  fill
                  className="hidden object-contain dark:block"
                />
              </span>
            </div>

            <div className="space-y-4">
              {navItems.map((item) => (
                <SheetClose key={item.label} asChild>
                  <a
                    href={item.href}
                    onClick={handleAnchorClick(item.href)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-primary transition-colors hover:bg-primary/10 dark:text-[#f7b346] dark:hover:bg-[#1a2536]"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </div>

            <button
              type="button"
              onClick={handleThemeToggle}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#d5dbe4] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#334155] transition-colors hover:bg-white dark:border-[#2d3d53] dark:bg-[#101a29] dark:text-[#dce5f3] dark:hover:bg-[#172334]"
            >
              {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span>{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            </button>

            <div className="mt-8">
              <SheetClose asChild>
                <Button asChild className="w-full rounded-md px-4 py-2.5 text-sm font-semibold text-white">
                  <a href="#ready-to-plan" onClick={handleAnchorClick('#ready-to-plan')}>Download</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
