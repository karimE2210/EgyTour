"use client";

/* 📚 IMPORTS */
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";

/* 🎯 NOT FOUND PAGE COMPONENT */
export default function NotFound() {
  /* 🌍 TRANSLATION HOOK */
  const { t } = useTranslation();
  /* 
    ⬆️ EDIT HERE TO CHANGE TRANSLATION:
    - t("key") = get translation for key
    - Add more translation keys as needed
  */

  return (
    /* 📝 NOT FOUND CONTAINER */
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
      {/* 
        ⬆️ EDIT HERE TO CHANGE CONTAINER STYLE:
        - min-h-[60vh] = minimum height
        - flex flex-col = vertical layout
        - items-center = center horizontally
        - justify-center = center vertically
      */}
      
      {/* 🔍 NOT FOUND ICON */}
      <div className="text-6xl mb-4">🔍</div>
      {/* 
        ⬆️ EDIT HERE TO CHANGE ICON:
        - text-6xl = icon size
        - mb-4 = bottom margin
        - Change emoji or use custom icon
      */}
      
      {/* 📝 NOT FOUND MESSAGE */}
      <h1 className="text-2xl font-bold mb-2">
        {/* 
          ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
          - text-2xl = font size
          - font-bold = font weight
          - mb-2 = bottom margin
        */}
        {t("notFound.title")}
        {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
      </h1>
      
      <p className="text-gray-600 mb-6">
        {/* 
          ⬆️ EDIT HERE TO CHANGE MESSAGE STYLE:
          - text-gray-600 = text color
          - mb-6 = bottom margin
        */}
        {t("notFound.message")}
        {/* ⬆️ EDIT HERE TO CHANGE MESSAGE TEXT */}
      </p>
      
      {/* 🏠 HOME BUTTON */}
      <Link href="/">
        <Button className="btn-primary">
          {/* 
            ⬆️ EDIT HERE TO CHANGE BUTTON STYLE:
            - btn-primary = primary button style
            - Add custom classes for size/padding
          */}
          {t("notFound.home")}
          {/* ⬆️ EDIT HERE TO CHANGE BUTTON TEXT */}
        </Button>
      </Link>
    </div>
  );
} 