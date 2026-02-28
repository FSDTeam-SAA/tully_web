'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section id="ready-to-plan" className="tully-bg-section py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="tully-section-title text-[#2f3f5c] dark:text-[#e2eaf7]">
            Ready to take control of your workload?
          </h2>
          <p className="tully-section-lead mx-auto mt-3 max-w-xl text-[#6b778d] dark:text-[#a6b5ca]">
            Start planning smarter this semester.
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-7 rounded-md border-primary/40 bg-card px-8 py-3 text-base font-semibold text-primary hover:bg-card/80 dark:border-[#3a4b63] dark:bg-[#162233] dark:text-[#f8b03d] dark:hover:bg-[#1f2d41]"
          >
            <a href="#home">Get Early Access</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
