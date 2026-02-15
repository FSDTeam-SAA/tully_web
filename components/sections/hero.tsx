'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Box, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  const trustItems = [
    { icon: Sparkles, label: 'Built with educators in mind' },
    { icon: Box, label: 'Designed for students' },
    { icon: ShieldCheck, label: 'Privacy-first' },
  ]

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24 md:pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 pb-4 md:grid-cols-[1.3fr_0.7fr] md:pb-0 lg:grid-cols-[1.36fr_0.64fr] lg:gap-12 xl:grid-cols-[1.42fr_0.58fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6 text-center md:space-y-7 md:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-tight text-[#34435f] md:text-5xl lg:text-6xl"
            >
              <span className="text-primary">Plan smarter.</span>
              <br />
              Stress less.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-md text-base leading-relaxed text-slate-600 md:mx-0 md:max-w-[620px] md:text-[22px] md:leading-8"
            >
              Tully helps students break down assignments, manage their time, and stay on track without doing the work for them.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center gap-4 pt-1 pb-6 sm:flex-row md:justify-start"
            >
              <Button className="rounded-md px-8 py-3 text-base font-semibold text-white">
                Download the app
              </Button>
              <Button
                variant="outline"
                className="rounded-md border border-primary/50 bg-white px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5"
              >
                For Schools
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative flex items-end justify-center md:justify-end md:self-end"
          >
            <div className="relative w-full md:w-[138%] lg:w-[150%] xl:w-[160%] md:max-w-none md:translate-x-5 lg:translate-x-8">
              <Image
                src="/images/hero_mobiles.png"
                alt="Tully mobile app previews"
                width={885}
                height={826}
                priority
                className="h-auto w-full max-w-none object-contain drop-shadow-[0_24px_42px_rgba(17,24,39,0.2)]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="relative z-20 bg-[#f6ece1]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {trustItems.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-2.5 px-5 py-4 text-center text-primary ${
                  index < trustItems.length - 1
                    ? 'border-b border-[#d8c7b7] md:border-b-0 md:border-r md:border-[#d8c7b7]'
                    : ''
                }`}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" />
                <span className="text-sm font-medium md:text-base">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
