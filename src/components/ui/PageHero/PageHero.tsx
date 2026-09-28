import type { PageHeroOverlay, PageHeroProps } from "./PageHero.types";

const baseClasses =
  "relative isolate flex min-h-[55vh] md:min-h-[60vh] lg:min-h-[70vh]  w-full items-end overflow-hidden";

const overlayClasses: Record<PageHeroOverlay, string> = {
  blue: "bg-tea-blue/70",
  green: "bg-tea-green/70",
  orange: "bg-tea-orange/70",
  red: "bg-tea-red/70",
  dark: "bg-tea-black/65",
};

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  overlay = "dark",
  action,
  className = "",
  ...props
}: PageHeroProps) {
  return (
    <section className={`${baseClasses} ${className}`} {...props}>
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${overlayClasses[overlay]}`}
      />

      <div className="w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              {subtitle}
            </p>
          )}

          {action && <div className="mt-6 flex flex-wrap gap-3">{action}</div>}
        </div>
      </div>
    </section>
  );
}