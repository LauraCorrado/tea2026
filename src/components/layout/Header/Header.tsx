import { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoMdMoon } from "react-icons/io";
import { NavLink } from "react-router";

import { Logo, LangSelector } from "@/components/ui";
import { useAccessibility } from "@/hooks/useAccessibility";
import { useLanguage } from "@/hooks/useLanguage";

import { languages } from "@/data/languages";
import { navigationItems } from "@/data/navigation";

export function Header() {
  const { settings, updateSetting } = useAccessibility();
  const { language, setLanguage } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full

        border-b
        border-site-border

        bg-site-surface/95
        text-site-text

        shadow-sm
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
    flex
    min-h-16
    w-full
    max-w-7xl
    items-center
    justify-between
    gap-6
    px-4
    py-2

    sm:px-6
    lg:px-8
        "
      >
        <NavLink
          to="/"
          aria-label="Vai alla homepage"
          className="
            shrink-0
            rounded-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-site-blue
            focus-visible:ring-offset-2
            focus-visible:ring-offset-site-surface
          "
        >
          <Logo
            variant={settings.darkMode ? "negative" : "default"}
            size="md"
          />
        </NavLink>

        <nav
          aria-label="Navigazione principale"
          className="
            hidden
            flex-1
            items-center
            justify-center

            lg:flex
          "
        >
          <ul
            className="
              flex
              items-center
              gap-1
            "
          >
            {navigationItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => `
                    relative
                    inline-flex
                    items-center
                    rounded-md
                    px-3
                    py-2
                    text-sm
                    font-medium

                    transition-colors
                    duration-200

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-site-blue
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-site-surface

                    ${
                      isActive
                        ? "text-site-blue"
                        : "text-site-text hover:bg-site-surface-alt hover:text-site-blue"
                    }
                  `}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="
    hidden
    shrink-0
    items-center
    gap-3
    lg:flex
  "
        >
          <DarkModeToggle
            checked={settings.darkMode}
            onChange={(checked) => updateSetting("darkMode", checked)}
          />

          <LangSelector
            languages={languages}
            value={language}
            onChange={(value) => setLanguage(value as "it" | "en")}
            variant="select"
            placement="bottom"
          />
        </div>

        {/* Menu mobile */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="
            inline-flex
            size-11
            items-center
            justify-center
            rounded-full

            border
            border-site-border-strong

            text-site-text

            transition-colors

            hover:bg-site-surface-alt

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-site-blue
            focus-visible:ring-offset-2
            focus-visible:ring-offset-site-surface

            lg:hidden
          "
        >
          {mobileMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`
          overflow-hidden
          border-site-border
          bg-site-surface

          transition-[max-height,opacity]
          duration-300

          lg:hidden

          ${
            mobileMenuOpen
              ? "max-h-[80vh] border-t opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-5

            sm:px-6
          "
        >
          <nav aria-label="Navigazione mobile">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => `
                      block
                      rounded-lg
                      px-4
                      py-3
                      text-base
                      font-medium

                      transition-colors

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-site-blue

                      ${
                        isActive
                          ? "bg-site-blue/10 text-site-blue"
                          : "text-site-text hover:bg-site-surface-alt"
                      }
                    `}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-3

              border-t
              border-site-border
              pt-5
            "
          >
            <DarkModeToggle
              checked={settings.darkMode}
              onChange={(checked) => updateSetting("darkMode", checked)}
            />

            <LangSelector
              languages={languages}
              value={language}
              onChange={(value) => setLanguage(value as "it" | "en")}
              variant="select"
              placement="bottom"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

interface DarkModeToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function DarkModeToggle({ checked, onChange }: DarkModeToggleProps) {
  return (
    <label
      className="
        flex
        cursor-pointer
        items-center
        gap-2
        rounded-full
        px-2
        py-1.5

        text-sm
        font-medium
        text-site-text

        transition-colors

        hover:bg-site-surface-alt
      "
    >
      <IoMdMoon size={16} aria-hidden="true" className="text-site-orange" />

      <span className="sr-only">Modalità notte</span>

      <span
        aria-hidden="true"
        className={`
          relative
          h-6
          w-11
          rounded-full

          transition-colors
          duration-200

          ${checked ? "bg-site-blue" : "bg-site-border-strong"}
        `}
      >
        <span
          className={`
            absolute
            left-1
            top-1
            size-4
            rounded-full
            bg-white

            shadow-sm

            transition-transform
            duration-200

            ${checked ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="sr-only"
      />
    </label>
  );
}