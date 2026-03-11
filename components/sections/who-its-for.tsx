'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

type AudienceCard = {
  title: string
  description: string
  image: string
  eyebrow: string
  detail: string
  highlights: string[]
}

const cards: AudienceCard[] = [
  {
    title: 'High-school students',
    description: 'Learn time management early and reduce school stress.',
    image: '/images/whofor/High-school-students.jpg',
    eyebrow: 'Build the habit early',
    detail:
      'Best for students who are still learning how to break assignments into small, daily actions before deadlines turn into pressure.',
    highlights: ['Homework routines', 'Earlier starts', 'Lower school stress'],
  },
  {
    title: 'University & college students',
    description: 'Balance classes, projects, and exams with confidence.',
    image: '/images/whofor/University-college_students.jpg',
    eyebrow: 'Manage heavier workloads',
    detail:
      'Ideal for students juggling classes, long-term projects, revision blocks, and shifting weekly schedules without losing momentum.',
    highlights: ['Project pacing', 'Exam planning', 'Weekly structure'],
  },
  {
    title: 'Schools & institutions',
    description: 'Support students beyond the classroom with smart planning tools.',
    image: '/images/whofor/Schools-institutions.jpg',
    eyebrow: 'Support students at scale',
    detail:
      'Designed for schools that want students to follow a practical planning system outside the classroom, not just receive another app to ignore.',
    highlights: ['Student support', 'Clear framework', 'Practical adoption'],
  },
]

function cardShellClasses(isActive: boolean) {
  return cn(
    'group flex h-full w-full flex-col overflow-hidden rounded-[24px] border p-2 text-left transition-all duration-300',
    isActive
      ? 'border-[#f0b45b]/70 bg-[linear-gradient(180deg,rgba(255,248,239,0.98)_0%,rgba(247,250,255,0.98)_100%)] shadow-[0_24px_55px_rgba(249,159,28,0.16)] md:-translate-y-2 md:scale-[1.02] dark:border-[#ffb34d]/35 dark:bg-[linear-gradient(180deg,rgba(26,41,64,0.98)_0%,rgba(19,32,49,0.98)_100%)] dark:shadow-[0_22px_50px_rgba(3,8,20,0.42)]'
      : 'border-primary/15 bg-card shadow-sm hover:border-primary/25 hover:shadow-md dark:border-[#32435d] dark:bg-[#172334] dark:shadow-none',
  )
}

function AudienceCardSurface({
  card,
  isActive,
}: {
  card: AudienceCard
  isActive: boolean
}) {
  return (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 32vw, 88vw"
          className={cn(
            'object-cover transition-transform duration-500',
            isActive ? 'scale-[1.06]' : 'scale-100',
          )}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(7,15,29,0)_0%,rgba(7,15,29,0.56)_100%)]" />
        <div
          className={cn(
            'absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur transition-colors',
            isActive
              ? 'bg-white/90 text-[#182436]'
              : 'bg-[#0f172a]/65 text-[#f8fbff]',
          )}
        >
          {card.eyebrow}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 py-8 text-center">
        <h3 className="mb-4 text-xl font-bold text-[#4a5568] dark:text-[#eef4ff]">
          {card.title}
        </h3>
        <p className="text-base leading-relaxed text-[#718096] dark:text-[#afbdd1]">
          {card.description}
        </p>
      </div>

      <div className="px-6 pb-6">
        <div
          className={cn(
            'h-1 rounded-full transition-all duration-300',
            isActive
              ? 'bg-[linear-gradient(90deg,#ff9f1c_0%,#f97316_100%)] opacity-100'
              : 'bg-[#dbe4f0] opacity-50 dark:bg-[#2a415c]',
          )}
        />
      </div>
    </>
  )
}

function AudienceDetails({
  card,
  panelId,
}: {
  card: AudienceCard
  panelId: string
}) {
  return (
    <motion.div
      key={card.title}
      id={panelId}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-[28px] border border-[#d9e3ee] bg-[linear-gradient(180deg,rgba(255,252,247,0.96)_0%,rgba(247,250,255,0.96)_100%)] p-6 text-center shadow-[0_18px_45px_rgba(30,41,59,0.06)] dark:border-[#2f435d] dark:bg-[linear-gradient(180deg,rgba(20,31,47,0.98)_0%,rgba(15,24,37,0.98)_100%)] dark:shadow-[0_20px_45px_rgba(3,8,20,0.35)]"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f59e0b] dark:text-[#ffbd59]">
        {card.eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#2f3f5c] dark:text-[#eef4ff]">
        {card.title}
      </h3>
      <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[#6c7b90] dark:text-[#b7c5d8]">
        {card.detail}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {card.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-[#f4c98c] bg-[#fff1d8] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#8a5a1a] dark:border-[#3a4f69] dark:bg-[#152438] dark:text-[#ffd08a]"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function WhoItsFor() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    const syncSelectedSlide = () => {
      setMobileIndex(carouselApi.selectedScrollSnap())
    }

    syncSelectedSlide()
    carouselApi.on('select', syncSelectedSlide)
    carouselApi.on('reInit', syncSelectedSlide)

    return () => {
      carouselApi.off('select', syncSelectedSlide)
      carouselApi.off('reInit', syncSelectedSlide)
    }
  }, [carouselApi])

  return (
    <section id="who-its-for" className="tully-bg-section scroll-mt-24 py-16 md:scroll-mt-28 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="tully-section-title mb-3 text-[#4a5568] dark:text-[#e2eaf7]">
            WHO TULLY IS FOR
          </h2>
          <p className="tully-section-lead font-light text-[#94a3b8] dark:text-[#a8b7cd]">
            Built for every learning stage
          </p>
        </motion.div>

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {cards.map((card, index) => {
            const isActive = activeIndex === index

            return (
              <motion.button
                key={card.title}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-controls="who-its-for-desktop-panel"
                className={cn(
                  cardShellClasses(isActive),
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9f1c] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                )}
              >
                <AudienceCardSurface card={card} isActive={isActive} />
              </motion.button>
            )
          })}
        </div>

        <div className="mt-8 hidden md:block">
          <AudienceDetails card={cards[activeIndex]} panelId="who-its-for-desktop-panel" />
        </div>

        <div className="md:hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {cards.map((card, index) => {
                const isActive = mobileIndex === index

                return (
                  <CarouselItem key={card.title} className="pl-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className={cardShellClasses(isActive)}
                    >
                      <AudienceCardSurface card={card} isActive={isActive} />
                    </motion.div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>

          <div className="mt-6 flex justify-center gap-2">
            {cards.map((card, index) => {
              const isActive = mobileIndex === index

              return (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(index)}
                  aria-label={`Show ${card.title}`}
                  aria-pressed={isActive}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    isActive ? 'w-8 bg-[#ff9f1c]' : 'w-2.5 bg-[#35516d]',
                  )}
                />
              )
            })}
          </div>

          <div className="mt-8">
            <AudienceDetails card={cards[mobileIndex]} panelId="who-its-for-mobile-panel" />
          </div>
        </div>
      </div>
    </section>
  )
}
