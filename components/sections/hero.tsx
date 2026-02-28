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
    { icon: ShieldCheck, label: 'Privacy first' },
  ]

  return (
    <section id="home" className="tully-bg-alt-a relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 pb-4 md:grid-cols-[1.1fr_0.9fr] md:pb-0 lg:gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="z-10 space-y-6 text-center md:space-y-7 md:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-semibold leading-tight text-[#34435f] md:text-5xl lg:text-6xl dark:text-[#e2eaf7]"
            >
              <span className="text-primary">Plan smarter.</span>
              <br />
              Stress less.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-md text-base leading-relaxed text-slate-600 md:mx-0 md:max-w-[550px] md:text-xl md:leading-8 dark:text-[#a9b8cf]"
            >
              Tully helps students break down assignments, manage their time, and stay on track without doing the work for them.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center gap-4 pt-1 pb-6 sm:flex-row md:justify-start"
            >
              <Button asChild className="rounded-md px-8 py-6 text-lg font-semibold text-white">
                <a href="#ready-to-plan">Download the app</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-md border border-primary/50 bg-white px-8 py-6 text-lg font-semibold text-primary hover:bg-primary/5 dark:border-[#3d4d64] dark:bg-[#162233] dark:text-[#f8b03d] dark:hover:bg-[#1e2d41]"
              >
                <a href="#schools">For Schools</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE: Scaled up while maintaining bottom alignment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative flex items-end justify-center md:justify-end md:self-end"
          >
            <div className="relative w-[115%] sm:w-[110%] md:w-[130%] lg:w-[140%] md:translate-x-12 lg:translate-x-20">
              <Image
                src="/images/hero_mobiles.png"
                alt="Tully mobile app previews"
                width={1200} 
                height={1200}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_24px_42px_rgba(17,24,39,0.2)]"
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
        className="tully-bg-band relative z-20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_-1px_0_rgba(255,255,255,0.03)]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {trustItems.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-2.5 px-5 py-6 text-center text-primary dark:text-[#ffc76a] ${
                  index < trustItems.length - 1
                    ? 'border-b border-[#d8c7b7] md:border-b-0 md:border-r md:border-[#d8c7b7] dark:border-[#304564]'
                    : ''
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="text-sm font-semibold md:text-base">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
