"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/contexts/language-context";
import type { Translations } from "@/contexts/language-context";

type NavItem = {
  label: keyof Translations;
  href: string;
};

const mainNavItems: NavItem[] = [
  { label: "nav.thingsToDo", href: "/things-to-do" },
  { label: "nav.whereToGo", href: "/where-to-go" },
  { label: "nav.whatToSee", href: "/what-to-see" },
  { label: "nav.planYourTrip", href: "/plan-your-trip" },
  { label: "nav.events", href: "/events" },
  { label: "nav.dashboard", href: "/dashboard" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-background shadow-md py-2">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          {/* <Link href="/" className="relative z-10 group">
            <Image
              src="/images/mypics/logo.png"
              alt="EgyTour"
              width={600}
              height={20}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link> */}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-x-6 relative flex-1 max-w-2xl mx-auto">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-foreground hover:text-primary font-medium transition-all duration-300 relative group"
              >
                {t(item.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            {/* Home Button */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 group">
              <div className="relative">
                {/* Semi-circular background */}
                <div className="absolute inset-x-0 -top-4 h-8 bg-background rounded-t-full shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary/10" />
                
                {/* Home button */}
                <Button
                  variant="default"
                  size="icon"
                  className="relative z-10 rounded-full bg-primary hover:bg-primary/90 w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  asChild
                >
                  <Link href="/">
                    <Home className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                </Button>
              </div>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Login and Signup Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-slate-800 bg-slate-200 hover:bg-slate-300 border border-slate-300 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/login">{t("auth.login")}</Link>
              </Button>
              <Button
                variant="default"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/signup">{t("auth.signup")}</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 w-[80vw] max-w-md">
                <div className="flex flex-col h-full bg-background">
                  <div className="p-4 border-b flex justify-between items-center">
                    <Image
                      src="/images/mypics/logo.png"
                      alt="EgyTour"
                      width={150}
                      height={35}
                      className="h-8 w-auto"
                    />
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <div className="flex-1 overflow-auto py-4">
                    <nav className="flex flex-col">
                      {mainNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="p-4 hover:bg-muted text-foreground font-medium border-b border-border"
                        >
                          {t(item.label)}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="p-4 border-t border-border">
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="w-full text-slate-600 hover:text-slate-800 bg-slate-200 hover:bg-slate-300 border border-slate-300 transition-all duration-300"
                        asChild
                      >
                        <Link href="/login">{t("auth.login")}</Link>
                      </Button>
                      <Button
                        variant="default"
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        asChild
                      >
                        <Link href="/signup">{t("auth.signup")}</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border-t border-border flex justify-between items-center">
                    <LanguageSwitcher />
                    <div className="flex items-center gap-1">
                      {[
                        { src: "/images/instagram-icon.png", alt: "Instagram" },
                        { src: "/images/youtube-icon.png", alt: "YouTube" },
                      ].map((social) => (
                        <Link href="#" key={social.alt} className="p-1">
                          <Image
                            src={social.src}
                            alt={social.alt}
                            width={18}
                            height={18}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
