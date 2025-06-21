"use client";

import Image from "next/image";
import { useTranslation } from '@/hooks/use-translation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PlanTrip() {
  const { t } = useTranslation();

  return (
    /* 🎯 PLAN YOUR TRIP SECTION */
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* 
        ⬆️ EDIT HERE TO CHANGE SECTION STYLE:
        - py-20 = vertical padding
        - bg-gray-50 = background color
      */}
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 
            ⬆️ EDIT HERE TO CHANGE LAYOUT:
            - grid-cols-1 = 1 column on mobile
            - lg:grid-cols-2 = 2 columns on desktop
            - gap-12 = gap between columns
            - items-center = vertical alignment
          */}

          {/* 📝 FORM COLUMN */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {/* 
                ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
                - text-3xl = font size on mobile
                - md:text-4xl = font size on desktop
                - font-bold = font weight
                - mb-4 = bottom margin
              */}
              {t("planTrip.title")}
              {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {/* 
                ⬆️ EDIT HERE TO CHANGE SUBTITLE STYLE:
                - text-lg = font size
                - text-gray-600 = text color
                - mb-8 = bottom margin
              */}
              {t("planTrip.subtitle")}
              {/* ⬆️ EDIT HERE TO CHANGE SUBTITLE TEXT */}
            </p>

            <form className="space-y-6">
              {/* 
                ⬆️ EDIT HERE TO CHANGE FORM STYLE:
                - space-y-6 = vertical spacing between elements
              */}

              {/* 📅 DATE RANGE */}
              <div className="grid grid-cols-2 gap-4">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE DATE INPUTS LAYOUT:
                  - grid-cols-2 = 2 columns
                  - gap-4 = gap between inputs
                */}
                
                <div className="space-y-2">
                  <Label htmlFor="start-date" className="text-gray-700 dark:text-gray-300">
                    {t("planTrip.startDate")}
                  </Label>
                  <Input
                    type="date"
                    id="start-date"
                    className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="end-date" className="text-gray-700 dark:text-gray-300">
                    {t("planTrip.endDate")}
                  </Label>
                  <Input
                    type="date"
                    id="end-date"
                    className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* 👥 TRAVELERS */}
              <div className="space-y-2">
                <Label htmlFor="travelers" className="text-gray-700 dark:text-gray-300">
                  {t("planTrip.travelers")}
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">
                    <SelectValue placeholder={t("planTrip.selectTravelers")} />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem
                        key={num}
                        value={num.toString()}
                        className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {num} {num === 1 ? t("planTrip.traveler") : t("planTrip.travelers")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 🎯 INTERESTS */}
              <div className="space-y-2">
                <Label htmlFor="interests" className="text-gray-700 dark:text-gray-300">
                  {t("planTrip.interests")}
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">
                    <SelectValue placeholder={t("planTrip.selectInterests")} />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                    <SelectItem value="culture" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      {t("planTrip.culture")}
                    </SelectItem>
                    <SelectItem value="adventure" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      {t("planTrip.adventure")}
                    </SelectItem>
                    <SelectItem value="relaxation" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      {t("planTrip.relaxation")}
                    </SelectItem>
                    <SelectItem value="food" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      {t("planTrip.food")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 📧 EMAIL */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                  {t("planTrip.email")}
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder={t("planTrip.emailPlaceholder")}
                  className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* 📱 SUBMIT BUTTON */}
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                {/* 
                  ⬆️ EDIT HERE TO CHANGE BUTTON STYLE:
                  - w-full = full width
                  - bg-primary = primary color
                  - hover:bg-primary/90 = hover effect
                */}
                {t("planTrip.submit")}
                {/* ⬆️ EDIT HERE TO CHANGE BUTTON TEXT */}
              </Button>
            </form>
          </div>

          {/* 🖼️ IMAGE COLUMN */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg dark:shadow-gray-800/50">
            {/* 
              ⬆️ EDIT HERE TO CHANGE IMAGE CONTAINER:
              - h-[600px] = height
              - rounded-lg = border radius
              - overflow-hidden = clip content
            */}
            
            <Image
              src="/images/mypics/plan-trip.jpeg"
              /* ⬆️ EDIT HERE TO CHANGE IMAGE:
                   - Change the src path
                   - Update alt text
              */
              alt="Plan Your Trip to Egypt"
              fill
              className="object-cover"
              /* 
                ⬆️ EDIT HERE TO CHANGE IMAGE STYLE:
                - object-cover = fills container
              */
            />
          </div>
        </div>
      </div>
    </section>
  );
} 