"use client";

/* 📚 IMPORTS */
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/shared/faq-section";
import { useTranslation } from '@/hooks/use-translation'
import { HeroBanner } from "@/components/shared/hero-banner";

/* 🎯 THINGS TO DO PAGE COMPONENT */
export default function ThingsToDo() {
  /* 🌍 TRANSLATION HOOK */
  const { t } = useTranslation()
  /* 
    ⬆️ EDIT HERE TO CHANGE TRANSLATION:
    - t("key") = get translation for key
    - Add more translation keys as needed
  */

  /* 📋 ACTIVITIES CATEGORIES DATA */
  const activitiesCategories = [
    {
      id: "Majestic-sinai",
      title: t('thingsToDo.experiences.sinai.title'),
      description: t('thingsToDo.experiences.sinai.description'),
      image: "/images/mypics/tree-sinai.jpeg",
      href: "/things-to-do/sinai",
    },
    {
      id: "Higher-Egypt",
      title: t('thingsToDo.experiences.higherEgypt.title'),
      description: t('thingsToDo.experiences.higherEgypt.description'),
      image: "/images/mypics/The Nile River.jpeg",
      href: "/things-to-do/higher-egypt",
    },
    {
      id: "Mediterranean",
      title: t('thingsToDo.experiences.mediterranean.title'),
      description: t('thingsToDo.experiences.mediterranean.description'),
      image: "/images/mypics/North coast.jpeg",
      href: "/things-to-do/mediterranean",
    },
  ];
  /* 
    ⬆️ EDIT HERE TO CHANGE ACTIVITIES:
    - Add/remove categories
    - Change images
    - Update links
    - Modify descriptions
  */

  /* 📋 THINGS TO DO CATEGORY TILES DATA */
  const thingsToDoCategoryTiles = [
    {
      id: "desert",
      title: t('thingsToDo.categories.desert'),
      image: "/images/mypics/desert_camp.jpeg",
      href: "/things-to-do/desert-and-outdoor-activities",
    },
    {
      id: "wellness",
      title: t('thingsToDo.categories.wellness'),
      image: "/images/mypics/siwaEye.jpeg",
      href: "/things-to-do/wellness-and-relaxation",
    },
    {
      id: "Historical-Sites",
      title: t('thingsToDo.categories.historical'),
      image: "/images/mypics/pyramid1.jpeg",
      href: "/things-to-do/historical-sites",
    },
    {
      id: "get-active",
      title: t('thingsToDo.categories.sports'),
      image: "/images/mypics/Black Desert.jpeg",
      href: "/things-to-do/sports-activities",
    },
    {
      id: "shopping",
      title: t('thingsToDo.categories.shopping'),
      image: "/images/mypics/shopping.jpg",
      href: "/shopping",
    },
    {
      id: "traditional",
      title: t('thingsToDo.categories.traditional'),
      image: "/images/mypics/Egyptian Culture.jpeg",
      href: "/things-to-do/local-experiences",
    },
  ];
  /* 
    ⬆️ EDIT HERE TO CHANGE CATEGORY TILES:
    - Add/remove categories
    - Change images
    - Update links
    - Modify titles
  */

  /* 📋 FAQ DATA */
  const thingsToDoFAQs = [
    {
      question: t('thingsToDo.faq.funThings.question'),
      answer: (
        <div>
          <p>{t('thingsToDo.faq.funThings.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('thingsToDo.faq.funThings.items.cruise')}</li>
            <li>{t('thingsToDo.faq.funThings.items.camping')}</li>
            <li>{t('thingsToDo.faq.funThings.items.quadBiking')}</li>
            <li>{t('thingsToDo.faq.funThings.items.camelRide')}</li>
            <li>{t('thingsToDo.faq.funThings.items.bazaar')}</li>
            <li>{t('thingsToDo.faq.funThings.items.kayaking')}</li>
            <li>{t('thingsToDo.faq.funThings.items.streetFood')}</li>
            <li>{t('thingsToDo.faq.funThings.items.cleopatraPool')}</li>
          </ul>
        </div>
      ),
    },
    {
      question: t('thingsToDo.faq.attractions.question'),
      answer: (
        <div>
          <p>{t('thingsToDo.faq.attractions.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('thingsToDo.faq.attractions.items.pyramids')}</li>
            <li>{t('thingsToDo.faq.attractions.items.museum')}</li>
            <li>{t('thingsToDo.faq.attractions.items.valleyOfKings')}</li>
            <li>{t('thingsToDo.faq.attractions.items.whiteDesert')}</li>
            <li>{t('thingsToDo.faq.attractions.items.islamicCairo')}</li>
            <li>{t('thingsToDo.faq.attractions.items.karnak')}</li>
            <li>{t('thingsToDo.faq.attractions.items.siwa')}</li>
            <li>{t('thingsToDo.faq.attractions.items.philae')}</li>
          </ul>
        </div>
      ),
    },
    {
      question: t('thingsToDo.faq.outdoorActivities.question'),
      answer: (
        <div>
          <p>{t('thingsToDo.faq.outdoorActivities.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('thingsToDo.faq.outdoorActivities.items.safari')}</li>
            <li>{t('thingsToDo.faq.outdoorActivities.items.felucca')}</li>
            <li>{t('thingsToDo.faq.outdoorActivities.items.hiking')}</li>
            <li>{t('thingsToDo.faq.outdoorActivities.items.reefs')}</li>
            <li>{t('thingsToDo.faq.outdoorActivities.items.camping')}</li>
            <li>{t('thingsToDo.faq.outdoorActivities.items.horseback')}</li>
            <li>{t('thingsToDo.faq.outdoorActivities.items.balloon')}</li>
            <li>{t('thingsToDo.faq.outdoorActivities.items.kiteSurfing')}</li>
          </ul>
        </div>
      ),
    },
  ];
  /* 
    ⬆️ EDIT HERE TO CHANGE FAQS:
    - Add/remove questions
    - Update answers
    - Modify formatting
  */

  return (
    /* 📝 MAIN CONTENT WRAPPER */
    <div className="pb-12">
      {/* 
        ⬆️ EDIT HERE TO CHANGE MAIN CONTAINER:
        - pb-12 = bottom padding
        - Add custom classes for background/color
      */}

      {/* 🎨 HERO BANNER */}
      <HeroBanner
        backgroundImage="/images/mypics/333.jpeg"
        /* ⬆️ EDIT HERE TO CHANGE HERO IMAGE:
             - Change the src path to your desired image
             - Example: src="/images/mypics/pyramids.jpeg"
        */
        title={t('thingsToDo.title')}
        /* ⬆️ EDIT HERE TO CHANGE HERO TITLE */
        subtitle={t('thingsToDo.subtitle')}
        /* ⬆️ EDIT HERE TO CHANGE HERO SUBTITLE */
      />

      {/* 📝 MAIN CONTENT SECTION */}
      <section className="container-custom py-12">
        {/* 
          ⬆️ EDIT HERE TO CHANGE SECTION STYLE:
          - container-custom = custom container class
          - py-12 = vertical padding
        */}
        
        {/* 📝 DESCRIPTION */}
        <p className="text-lg mb-8">
          {/* 
            ⬆️ EDIT HERE TO CHANGE DESCRIPTION STYLE:
            - text-lg = font size
            - mb-8 = bottom margin
          */}
          {t('thingsToDo.description')}
          {/* ⬆️ EDIT HERE TO CHANGE DESCRIPTION TEXT */}
        </p>

        {/* 🎯 CHOOSE YOUR ADVENTURE SECTION */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 md:p-8 rounded-lg my-10">
          {/* 
            ⬆️ EDIT HERE TO CHANGE ADVENTURE SECTION STYLE:
            - bg-gray-100 = background color
            - p-6 md:p-8 = responsive padding
            - rounded-lg = border radius
            - my-10 = vertical margin
          */}
          
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {/* 
              ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
              - text-2xl = font size
              - font-bold = font weight
              - mb-4 = bottom margin
            */}
            {t('thingsToDo.chooseAdventure.title')}
            {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* 
              ⬆️ EDIT HERE TO CHANGE LAYOUT:
              - flex-col = stack on mobile
              - md:flex-row = side by side on desktop
              - gap-4 = space between items
            */}
            
            <p className="flex-1 text-gray-800 dark:text-gray-100">
              {/* 
                ⬆️ EDIT HERE TO CHANGE TEXT STYLE:
                - flex-1 = take remaining space
              */}
              {t('thingsToDo.chooseAdventure.description')}
              {/* ⬆️ EDIT HERE TO CHANGE DESCRIPTION TEXT */}
            </p>
            
            <Button className="btn-primary whitespace-nowrap">
              {/* 
                ⬆️ EDIT HERE TO CHANGE BUTTON STYLE:
                - btn-primary = primary button style
                - whitespace-nowrap = prevent text wrapping
              */}
              {t('thingsToDo.chooseAdventure.cta')}
              {/* ⬆️ EDIT HERE TO CHANGE BUTTON TEXT */}
            </Button>
          </div>
        </div>

        {/* 🎨 FEATURED ACTIVITIES */}
        <div className="my-12">
          {/* 
            ⬆️ EDIT HERE TO CHANGE SECTION SPACING:
            - my-12 = vertical margin
          */}
          
          <h2 className="text-3xl font-bold mb-8">
            {/* 
              ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
              - text-3xl = font size
              - font-bold = font weight
              - mb-8 = bottom margin
            */}
            {t('thingsToDo.experiences.title')}
            {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 
              ⬆️ EDIT HERE TO CHANGE GRID LAYOUT:
              - grid-cols-1 = 1 column on mobile
              - md:grid-cols-3 = 3 columns on desktop
              - gap-6 = gap between items
            */}
            
            {activitiesCategories.map((activity) => (
              <Link key={activity.id} href={activity.href} className="group">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE CARD LINK:
                  - group = enable hover effects
                  - Change href to desired route
                */}
                
                <Card className="overflow-hidden border-none shadow-md h-[350px] relative">
                  {/* 
                    ⬆️ EDIT HERE TO CHANGE CARD STYLE:
                    - overflow-hidden = clip content
                    - border-none = remove border
                    - shadow-md = medium shadow
                    - h-[350px] = fixed height
                  */}
                  
                  <CardContent className="p-0 h-full">
                    {/* 
                      ⬆️ EDIT HERE TO CHANGE CONTENT STYLE:
                      - p-0 = remove padding
                      - h-full = full height
                    */}
                    
                    <div className="absolute inset-0">
                      {/* 
                        ⬆️ EDIT HERE TO CHANGE IMAGE CONTAINER:
                        - absolute inset-0 = fill container
                      */}
                      
                      <Image
                        src={activity.image}
                        /* ⬆️ EDIT HERE TO CHANGE IMAGE:
                             - Change the src path
                             - Update alt text
                        */
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        /* 
                          ⬆️ EDIT HERE TO CHANGE IMAGE STYLE:
                          - object-cover = fills container
                          - transition-transform = enable animations
                          - duration-700 = animation speed
                          - group-hover:scale-105 = hover zoom effect
                        */
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      {/* 
                        ⬆️ EDIT HERE TO CHANGE OVERLAY:
                        - from-black/70 = start color opacity
                        - to-transparent = end color
                      */}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      {/* 
                        ⬆️ EDIT HERE TO CHANGE CONTENT POSITIONING:
                        - bottom-0 left-0 = position at bottom left
                        - p-6 = padding
                      */}
                      
                      <h3 className="text-xl font-semibold group-hover:underline">
                        {/* 
                          ⬆️ EDIT HERE TO CHANGE TITLE STYLE:
                          - text-xl = font size
                          - font-semibold = font weight
                          - group-hover:underline = hover effect
                        */}
                        {activity.title}
                        {/* ⬆️ EDIT HERE TO CHANGE TITLE TEXT */}
                      </h3>
                      
                      {activity.description && (
                        <p className="mt-2 text-sm text-white/90">
                          {/* 
                            ⬆️ EDIT HERE TO CHANGE DESCRIPTION STYLE:
                            - mt-2 = top margin
                            - text-sm = font size
                            - text-white/90 = text color with opacity
                          */}
                          {activity.description}
                          {/* ⬆️ EDIT HERE TO CHANGE DESCRIPTION TEXT */}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* 🎯 CATEGORY TILES */}
        <div className="my-12">
          {/* 
            ⬆️ EDIT HERE TO CHANGE SECTION SPACING:
            - my-12 = vertical margin
          */}
          
          <h2 className="text-3xl font-bold mb-8">
            {/* 
              ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
              - text-3xl = font size
              - font-bold = font weight
              - mb-8 = bottom margin
            */}
            {t('thingsToDo.more.title')}
            {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* 
              ⬆️ EDIT HERE TO CHANGE GRID LAYOUT:
              - grid-cols-2 = 2 columns on mobile
              - md:grid-cols-3 = 3 columns on desktop
              - gap-4 = gap between items
            */}
            
            {thingsToDoCategoryTiles.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE TILE LINK:
                  - group = enable hover effects
                  - Change href to desired route
                */}
                
                <div className="aspect-square relative overflow-hidden rounded-md bg-gray-200">
                  {/* 
                    ⬆️ EDIT HERE TO CHANGE TILE STYLE:
                    - aspect-square = 1:1 aspect ratio
                    - overflow-hidden = clip content
                    - rounded-md = border radius
                    - bg-gray-200 = background color
                  */}
                  
                  <Image
                    src={category.image}
                    /* ⬆️ EDIT HERE TO CHANGE IMAGE:
                         - Change the src path
                         - Update alt text
                    */
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    /* 
                      ⬆️ EDIT HERE TO CHANGE IMAGE STYLE:
                      - object-cover = fills container
                      - transition-transform = enable animations
                      - duration-300 = animation speed
                      - group-hover:scale-105 = hover zoom effect
                    */
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* 
                    ⬆️ EDIT HERE TO CHANGE OVERLAY:
                    - from-black/60 = start color opacity
                    - to-transparent = end color
                  */}
                  
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-white text-center">
                    {/* 
                      ⬆️ EDIT HERE TO CHANGE CONTENT POSITIONING:
                      - inset-0 = fill container
                      - flex items-center justify-center = center content
                      - p-4 = padding
                      - text-center = center text alignment
                    */}
                    
                    <h3 className="text-lg font-semibold">
                      {/* 
                        ⬆️ EDIT HERE TO CHANGE TITLE STYLE:
                        - text-lg = font size
                        - font-semibold = font weight
                      */}
                      {category.title}
                      {/* ⬆️ EDIT HERE TO CHANGE TITLE TEXT */}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ❓ FAQ SECTION */}
        <FAQSection 
          faqs={thingsToDoFAQs} 
          title={t('thingsToDo.faq.title')} 
        />
        {/* 
          ⬆️ EDIT HERE TO CHANGE FAQ SECTION:
          - Update faqs data
          - Change section title
          - Modify styling
        */}
      </section>
    </div>
  );
}
