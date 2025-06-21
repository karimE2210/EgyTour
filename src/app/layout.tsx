/* 🎯 ROOT LAYOUT - Main layout wrapper for all pages */
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ClientBody from "./ClientBody"; // Fixed import for ClientBody
import type { Metadata } from "next";
import { Providers } from "@/components/providers/session-provider";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { Toaster } from "@/components/ui/toaster";

/* 📝 FONT CONFIGURATION */
const inter = Inter({ subsets: ["latin"] });

/* 📋 METADATA CONFIGURATION */
export const metadata: Metadata = {
  title: "EgyTour - Discover Egypt",
  description: "Your guide to exploring the wonders of Egypt",
};

/* 🎨 ROOT LAYOUT COMPONENT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* 🌐 HTML LANG ATTRIBUTE - Set to English by default */
    <html lang="en" suppressHydrationWarning>
      {/* 
        ⬆️ EDIT HERE TO CHANGE DEFAULT LANGUAGE:
        - lang="en" = English (try "ar" for Arabic)
        - suppressHydrationWarning = prevents hydration warnings
      */}
      
      {/* 📦 BODY CONTAINER */}
      <body className={inter.className}>
        {/* 
          ⬆️ EDIT HERE TO CHANGE BODY STYLE:
          - inter.className = applies Inter font
          - Add custom classes for global styles
        */}
        
        {/* 🎨 THEME PROVIDER - Handles dark/light mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 
            ⬆️ EDIT HERE TO CHANGE THEME CONFIG:
            - attribute="class" = uses class for theme switching
            - defaultTheme="system" = follows system preference
            - enableSystem = allows system theme detection
            - disableTransitionOnChange = prevents flash on theme change
          */}
          
          {/* 🌍 LANGUAGE PROVIDER - Handles translations */}
          <LanguageProvider>
            {/* 
              ⬆️ EDIT HERE TO CHANGE LANGUAGE CONFIG:
              - Add defaultLanguage prop
              - Add supportedLanguages prop
            */}
            
            {/* 📝 MAIN CONTENT */}
            <Providers>
              <div className="relative min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
              </div>
            </Providers>
            {/* 
              ⬆️ EDIT HERE TO ADD GLOBAL ELEMENTS:
              - Add footer component
              - Add navigation component
              - Add analytics scripts
            */}
            
            {/* 🔔 TOAST NOTIFICATIONS */}
            <Toaster />
            {/* 
              ⬆️ EDIT HERE TO CHANGE TOAST CONFIG:
              - Add position prop
              - Add duration prop
            */}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
