import { Mail, MapPin, Phone, ReceiptText } from "lucide-react";
import { NavLink } from "react-router";

import { Logo, SocialLinks } from "@/components/ui";

import { legalItems, navigationItems } from "@/data/navigation";
import { teaSocialLinks } from "@/data/socialLinks";

import { useAccessibility } from "@/hooks/useAccessibility";

export function Footer() {
  const { settings } = useAccessibility();

  return (
    <footer
      className="
        border-t
        border-site-border
        bg-site-surface-alt
        text-site-text
      "
    >
      <div
        className="
          mx-auto
    grid
    w-full
    max-w-7xl
    gap-10
    px-4
    py-12

    text-center

    sm:px-6

    md:grid-cols-2
    md:text-left

    lg:grid-cols-4
    lg:px-8
    lg:py-16
        "
      >
        <div>
          <NavLink
            to="/"
            aria-label="Vai alla homepage"
            className="
              inline-flex
              rounded-md

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-site-blue
              focus-visible:ring-offset-2
              focus-visible:ring-offset-site-surface-alt
            "
          >
            <Logo
              variant={settings.darkMode ? "negative" : "default"}
              size="md"
              className="max-h-24 w-auto object-contain"
            />
          </NavLink>

          <p
            className="
              mt-2
              max-w-sm
              text-sm
              leading-relaxed
              text-site-muted
            "
          >
            TEA è una <strong>PMI innovativa</strong> che sviluppa soluzioni per
            la fruizione accessibile dell’arte e dei beni culturali, affiancando
            a questo ambito competenze nella consulenza statistica, nell’imaging
            multispettrale, nell’edutainment e nella gamification.
          </p>

          <div className="flex flex-col items-center md:items-start mt-6">
            <SocialLinks links={teaSocialLinks} size="sm" />
          </div>
        </div>

        <div>
          <h2
            className="
              text-md
              font-bold
              uppercase text-site-blue mb-5
              tracking-wide
            "
          >
            Menu
          </h2>

          <nav aria-label="Navigazione footer" className="mt-4">
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) => `
    text-sm
    font-semibold

    transition-colors
    duration-200

    ${isActive ? "text-site-blue" : "text-site-text hover:text-site-blue"}

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-site-blue
    focus-visible:ring-offset-2
    focus-visible:ring-offset-site-surface-alt
  `}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2
            className="
              text-md
              font-bold
              uppercase text-site-blue mb-5
              tracking-wide
            "
          >
            Informazioni
          </h2>

          <div
            className="
              mt-4
              space-y-4
              text-sm
              text-site-muted
            "
          >
            <div className="flex items-start justify-center gap-3 md:justify-start">
              <Mail
                size={18}
                aria-hidden="true"
                className="
                  mt-0.5
                  shrink-0
                  text-site-blue
                "
              />

              <div className="space-y-1">
                <a
                  href="mailto:info@teacz.com"
                  className="
                    block
                    hover:text-site-blue
                  "
                >
                  info@teacz.com
                </a>

                <a
                  href="mailto:elena@teacz.com"
                  className="
                    block
                    hover:text-site-blue
                  "
                >
                  elena@teacz.com
                </a>
              </div>
            </div>

            <div className="flex items-start justify-center gap-3 md:justify-start">
              <Phone
                size={18}
                aria-hidden="true"
                className="
                  mt-0.5
                  shrink-0
                  text-site-green
                "
              />

              <a href="tel:+393493056593" className="hover:text-site-green">
                +39 349.3056593
              </a>
            </div>

            <div className="flex items-start justify-center gap-3 md:justify-start">
              <MapPin
                size={18}
                aria-hidden="true"
                className="
                  mt-0.5
                  shrink-0
                  text-site-orange
                "
              />

              <address className="not-italic leading-relaxed">
                C.da Santa Domenica, 48E
                <br />
                88100 - Catanzaro
              </address>
            </div>

            <div className="flex items-start justify-center gap-3 md:justify-start">
              <ReceiptText
                size={18}
                aria-hidden="true"
                className="
      mt-0.5
      shrink-0
      text-site-red
    "
              />

              <p className="leading-relaxed">P. I. 02068160791</p>
            </div>
          </div>
        </div>

        <div>
          <h2
            className="
              text-md
              font-bold
              uppercase text-site-blue mb-5
              tracking-wide
            "
          >
            La nostra policy
          </h2>

          <nav aria-label="Informazioni legali" className="mt-4">
            <ul className="space-y-3">
              {legalItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => `
    text-sm
    font-semibold

    transition-colors
    duration-200

    ${isActive ? "text-site-blue" : "text-site-text hover:text-site-blue"}

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-site-blue
    focus-visible:ring-offset-2
    focus-visible:ring-offset-site-surface-alt
  `}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        className="
          border-t
          border-site-border
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            gap-2
            px-4
            py-5
            text-xs
            text-site-soft

            sm:px-6

            md:flex-row
            md:items-center
            md:justify-between

            lg:px-8
          "
        >
          <span>© {new Date().getFullYear()} TEA S.r.l.</span>

          <span>Tutti i diritti riservati</span>
        </div>
      </div>
    </footer>
  );
}