import type { ProductCardAccent, ProductCardProps } from "./ProductCard.types";

const accentClasses: Record<ProductCardAccent, string> = {
  blue: "bg-tea-blue",
  green: "bg-tea-green",
  orange: "bg-tea-orange",
  red: "bg-tea-red",
  black: "bg-tea-black",
  white: "bg-white",
};

export function ProductCard({
  logo,
  title,
  description,
  image,
  action,
  side = "right",
  accent = "blue",
  className = "",
  ...props
}: ProductCardProps) {
  const reverse = side === "left" ? "lg:flex-row-reverse" : "lg:flex-row";

  const overlap = side === "left" ? "lg:-mr-16" : "lg:-ml-16";

  return (
    <article
      className={`
        flex flex-col
        items-center
        ${reverse}
        ${className}
      `}
      {...props}
    >
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
          lg:w-[68%]
        "
      >
        <img
          src={image.src}
          alt={image.alt}
          className="
            aspect-4/3
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-[1.02]
          "
        />
        <span
          aria-hidden="true"
          className={`
            absolute top-0 right-0
            h-1.5 w-70
            rounded-b-lg
            ${accentClasses[accent]}
          `}
        />

        <span
          aria-hidden="true"
          className={`
            absolute bottom-0 left-0
            h-1.5 w-70
             rounded-t-lg
            ${accentClasses[accent]}
          `}
        />
      </div>

      <div
        className={`
          relative z-10
          mx-5 -mt-10
          w-[calc(100%-2.5rem)]
          rounded-2xl
          bg-white
          p-7
          shadow-xl
          lg:mx-0
          lg:mt-0
          lg:w-[38%]
          lg:p-9
          ${overlap}
        `}
      >
        <span
          aria-hidden="true"
          className={`
            absolute left-0 top-8
            h-20 w-1
            rounded-r-full
            ${accentClasses[accent]}
          `}
        />

        {logo && <div className="mb-5">{logo}</div>}

        {title && (
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        )}

        <div className="mt-3 leading-relaxed text-black/65">{description}</div>

        {action && <div className="mt-6">{action}</div>}
      </div>
    </article>
  );
}