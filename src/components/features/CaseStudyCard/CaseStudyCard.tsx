import type { CaseStudyCardProps } from "./CaseStudyCard.types";

export function CaseStudyCard({
  image,
  title,
  description,
  badges,
  action,
  imagePosition = "left",
  className = "",
  ...props
}: CaseStudyCardProps) {
  const isImageRight = imagePosition === "right";

  return (
    <article
      className={`
        group
        grid
        items-center
        md:grid-cols-[1.1fr_0.9fr]
        ${className}
      `}
      {...props}
    >
      <div
        className={`
          relative
          min-h-80
          overflow-hidden
          rounded-2xl
          md:min-h-105

          ${isImageRight ? "md:order-2" : "md:order-1"}
        `}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-black/35
          "
        />

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
            p-6
            text-center
          "
        >
          <h3
            className="
              max-w-lg
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              text-white
              text-shadow-lg
              text-shadow-tea-black/20

              md:text-4xl
            "
          >
            {title}
          </h3>
        </div>
      </div>

      <div
        className={`
          relative
          z-10

          flex
          flex-col
          justify-center

          bg-site-surface
          text-site-text

          p-6
          shadow-xl

          md:rounded-2xl
          md:p-8

          lg:p-10

          ${
            isImageRight
              ? "md:order-1 md:-mr-8"
              : "md:order-2 md:-ml-8"
          }
        `}
      >
        {badges && badges.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {badges}
          </div>
        )}

        {description && (
          <div
            className="
              max-w-xl
              text-base
              leading-relaxed
              text-site-muted
            "
          >
            {description}
          </div>
        )}

        {action && (
          <div className="mt-7">
            {action}
          </div>
        )}
      </div>
    </article>
  );
}