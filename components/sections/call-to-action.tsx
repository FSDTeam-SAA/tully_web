'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section id="ready-to-plan" className="bg-white py-14 md:py-16 dark:bg-[#0e1521]">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#2f3f5c] md:text-4xl dark:text-[#e2eaf7]">
            Ready to take control of your workload?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#6b778d] md:text-base dark:text-[#a6b5ca]">
            Start planning smarter this semester.
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-7 rounded-md border-primary/40 bg-white px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/5 md:text-base dark:border-[#3a4b63] dark:bg-[#162233] dark:text-[#f8b03d] dark:hover:bg-[#1f2d41]"
          >
            <a href="#home">Get Early Access</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
