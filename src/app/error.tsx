"use client"

/* 📚 IMPORTS */
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

/* 🎯 ERROR PAGE COMPONENT */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  /* 🌍 TRANSLATION HOOK */
  const { t } = useTranslation()
  /* 
    ⬆️ EDIT HERE TO CHANGE TRANSLATION:
    - t("key") = get translation for key
    - Add more translation keys as needed
  */

  return (
    /* 📝 ERROR CONTAINER */
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
      {/* 
        ⬆️ EDIT HERE TO CHANGE CONTAINER STYLE:
        - min-h-[60vh] = minimum height
        - flex flex-col = vertical layout
        - items-center = center horizontally
        - justify-center = center vertically
      */}
      
      {/* ❌ ERROR ICON */}
      <div className="text-6xl mb-4">❌</div>
      {/* 
        ⬆️ EDIT HERE TO CHANGE ICON:
        - text-6xl = icon size
        - mb-4 = bottom margin
        - Change emoji or use custom icon
      */}
      
      {/* 📝 ERROR MESSAGE */}
      <h1 className="text-2xl font-bold mb-2">
        {/* 
          ⬆️ EDIT HERE TO CHANGE HEADING STYLE:
          - text-2xl = font size
          - font-bold = font weight
          - mb-2 = bottom margin
        */}
        {t("error.title")}
        {/* ⬆️ EDIT HERE TO CHANGE HEADING TEXT */}
      </h1>
      
      <p className="text-gray-600 mb-6">
        {/* 
          ⬆️ EDIT HERE TO CHANGE MESSAGE STYLE:
          - text-gray-600 = text color
          - mb-6 = bottom margin
        */}
        {t("error.message")}
        {/* ⬆️ EDIT HERE TO CHANGE MESSAGE TEXT */}
      </p>
      
      {/* 🔄 RETRY BUTTON */}
      <Button
        onClick={reset}
        className="btn-primary"
      >
        {/* 
          ⬆️ EDIT HERE TO CHANGE BUTTON STYLE:
          - btn-primary = primary button style
          - Add custom classes for size/padding
        */}
        {t("error.retry")}
        {/* ⬆️ EDIT HERE TO CHANGE BUTTON TEXT */}
      </Button>
    </div>
  )
} 