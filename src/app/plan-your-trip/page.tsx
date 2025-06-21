"use client";

import { useTranslation } from '@/hooks/use-translation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function PlanYourTrip() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'visa',
      title: t('planTrip.sections.visa'),
      image: '/images/visa.jpg',
      href: '/plan-your-trip/visa'
    },
    {
      id: 'transport',
      title: t('planTrip.sections.transport'),
      image: '/images/transport.jpg',
      href: '/plan-your-trip/transport'
    },
    {
      id: 'accommodation',
      title: t('planTrip.sections.accommodation'),
      image: '/images/accommodation.jpg',
      href: '/plan-your-trip/accommodation'
    },
    {
      id: 'weather',
      title: t('planTrip.sections.weather'),
      image: '/images/weather.jpg',
      href: '/plan-your-trip/weather'
    },
    {
      id: 'packing',
      title: t('planTrip.sections.packing'),
      image: '/images/packing.jpg',
      href: '/plan-your-trip/packing'
    },
    {
      id: 'safety',
      title: t('planTrip.sections.safety'),
      image: '/images/safety.jpg',
      href: '/plan-your-trip/safety'
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/images/plan-your-trip-hero.jpg"
          alt="Plan your trip to Egypt"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">{t('planTrip.title')}</h1>
            <p className="text-xl md:text-2xl">{t('planTrip.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="w-full py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.id} href={section.href}>
                <Card className="group relative h-[300px] overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 