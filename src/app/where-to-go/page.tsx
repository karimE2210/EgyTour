"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/faq-section";
import { useTranslation } from '@/hooks/use-translation'

export default function WhereToGo() {
  const { t } = useTranslation()

  const destinations = [
    {
      id: "landscapes",
      title: t('whereToGo.destinations.landscapes.title'),
      description: t('whereToGo.destinations.landscapes.description'),
      buttons: [
        { text: t('whereToGo.destinations.landscapes.buttons.regions'), href: "/where-to-go/about-egypt" },
        { text: t('whereToGo.destinations.landscapes.buttons.islands'), href: "/where-to-go/islands" },
      ],
      image: "/images/desert-activities.jpg",
    },
    {
      id: "theme-parks",
      title: t('whereToGo.destinations.themeParks.title'),
      description: "",
      buttons: [
        {
          text: t('whereToGo.destinations.themeParks.buttons.find'),
          href: "/where-to-go/adventure-and-theme-parks",
        },
      ],
      image: "/images/ferrari-world.jpg",
      bgColor: "bg-yellow-400",
    },
    {
      id: "wildlife",
      title: t('whereToGo.destinations.wildlife.title'),
      description: "",
      buttons: [
        { text: t('whereToGo.destinations.wildlife.buttons.nature'), href: "/where-to-go/wild-side" },
      ],
      image: "/images/desert-activities.jpg",
      bgColor: "bg-sand/80",
    },
    {
      id: "beaches",
      title: t('whereToGo.destinations.beaches.title'),
      description: "",
      buttons: [
        {
          text: t('whereToGo.destinations.beaches.buttons.find'),
          href: "/where-to-go/vitamin-sea",
        },
      ],
      image: "/images/yas-waterworld.jpg",
      layout: "full-image",
    },
  ];

  const categoryTiles = [
    {
      id: "marinas",
      title: t('whereToGo.categories.marinas'),
      href: "/where-to-go/marinas-and-plazas",
      image: "/images/ferrari-world.jpg",
    },
    {
      id: "dining",
      title: t('whereToGo.categories.dining'),
      href: "/where-to-go/dining",
      image: "/images/desert-activities.jpg",
    },
    {
      id: "golf",
      title: t('whereToGo.categories.golf'),
      href: "/things-to-do/sports-activities/golf",
      image: "/images/yas-waterworld.jpg",
    },
  ];

  const whereToGoFAQs = [
    {
      question: t('whereToGo.faq.threeDays.question'),
      answer: (
        <div>
          <p>{t('whereToGo.faq.threeDays.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('whereToGo.faq.threeDays.items.pyramids')}</li>
            <li>{t('whereToGo.faq.threeDays.items.nile')}</li>
            <li>{t('whereToGo.faq.threeDays.items.bazaar')}</li>
            <li>{t('whereToGo.faq.threeDays.items.dahab')}</li>
            <li>{t('whereToGo.faq.threeDays.items.museum')}</li>
            <li>{t('whereToGo.faq.threeDays.items.alexandria')}</li>
            <li>{t('whereToGo.faq.threeDays.items.oldCairo')}</li>
          </ul>
        </div>
      ),
    },
    {
      question: t('whereToGo.faq.worthSeeing.question'),
      answer: (
        <p>
          {t('whereToGo.faq.worthSeeing.answer')}
        </p>
      ),
    },
    {
      question: t('whereToGo.faq.mostVisited.question'),
      answer: (
        <div>
          <p>{t('whereToGo.faq.mostVisited.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('whereToGo.faq.mostVisited.items.pyramids')}</li>
            <li>{t('whereToGo.faq.mostVisited.items.museum')}</li>
            <li>{t('whereToGo.faq.mostVisited.items.karnak')}</li>
            <li>{t('whereToGo.faq.mostVisited.items.valley')}</li>
            <li>{t('whereToGo.faq.mostVisited.items.abuSimbel')}</li>
            <li>{t('whereToGo.faq.mostVisited.items.citadel')}</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="pb-12">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mypics/222.jpeg"
            alt={t('whereToGo.hero.title')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="container-custom relative z-10 h-full flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('whereToGo.hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('whereToGo.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <p className="text-lg mb-8">
          {t('whereToGo.description')}
        </p>

        {/* Destinations Sections */}
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`relative ${
              index < destinations.length - 1 ? "mb-16" : ""
            }`}
          >
            {destination.layout === "full-image" ? (
              // Full image layout
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{destination.title}</h2>
                  {destination.description && <p className="text-lg mb-6 max-w-2xl">{destination.description}</p>}
                  <div className="flex flex-wrap gap-3">
                    {destination.buttons.map((button) => (
                      <Button key={button.href} asChild className="btn-primary">
                        <Link href={button.href}>{button.text}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Split layout with text and image
              <div className={`flex flex-col md:flex-row rounded-lg overflow-hidden ${destination.bgColor || "bg-gray-100"}`}>
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{destination.title}</h2>
                  <p className="mb-6">{destination.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {destination.buttons.map((button) => (
                      <Button key={button.href} asChild className="btn-primary">
                        <Link href={button.href}>{button.text}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-h-[300px] md:min-h-[400px] relative">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Category Tiles */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">{t('whereToGo.categories.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryTiles.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                <Card className="bg-gray-200 overflow-hidden border-none h-[200px] relative">
                  <CardContent className="p-0 h-full">
                    <div className="absolute inset-0">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-medium bg-black/30 px-6 py-3 rounded-sm">{category.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Waterworld CTA */}
        <div className="relative h-[500px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/yas-waterworld.jpg"
            alt={t('whereToGo.cta.title')}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/70 to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-center p-8 md:p-16 text-white max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whereToGo.cta.title')}</h2>
            <Button asChild className="btn-primary mt-4 w-fit">
              <Link href="/where-to-go/adventure-and-theme-parks/yas-water-world">
                {t('whereToGo.cta.button')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        faqs={whereToGoFAQs}
        title={t('whereToGo.faq.title')}
      />
    </div>
  );
}
