"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";

const footerLinks = [
  {
    title: "Travelling to Egypt",
    href: "/plan-your-trip/travelling-to-egypt",
  },
  {
    title: "Visa information",
    href: "https://www.visa2egypt.gov.eg/eVisa/Home?VISTK=ODMH-2K5Q-WJCW-QYA3-14QN-GK94-M5FK-XPR8-F8QU-AO2F-QURN-686V-4KSC-5NUQ-TVQG-248O",
  },
  {
    title: "Travellers inspiration",
    href: "/plan-your-trip/article-hub",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: "/images/instagram-icon.png",
    href: "#",
  },
  {
    name: "Twitter",
    icon: "/images/twitter-icon.png",
    href: "#",
  },
  {
    name: "YouTube",
    icon: "/images/youtube-icon.png",
    href: "#",
  },
  {
    name: "TripAdvisor",
    icon: "/images/tripadvisor-icon.png",
    href: "#",
  },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Image
              src="/images/mypics/logo.png"
              alt="EgyTour"
              width={150}
              height={35}
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground">
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("common.explore")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/things-to-do" className="text-muted-foreground hover:text-foreground">
                  {t("nav.thingsToDo")}
                </Link>
              </li>
              <li>
                <Link href="/where-to-go" className="text-muted-foreground hover:text-foreground">
                  {t("nav.whereToGo")}
                </Link>
              </li>
              <li>
                <Link href="/what-to-see" className="text-muted-foreground hover:text-foreground">
                  {t("nav.whatToSee")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.newsletter")}</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="w-full px-3 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
              >
                {t("footer.newsletter.subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Image
                src="/images/instagram-icon.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Image
                src="/images/youtube-icon.png"
                alt="YouTube"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
