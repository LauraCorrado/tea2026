// respons: title, eventuale eyebrow / subtitle, opzionale descrizione,allineamento configurabile, possibilità classi custom
import type {
  SectionHeaderAlign,
  SectionHeaderProps,
} from "./SectionHeader.types";

const baseClasses = "flex flex-col gap-3";

const alignClasses: Record<SectionHeaderAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export function SectionHeader({
  title,
  eyebrow,
  description,
  align = "left",
  className = "",
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={`${baseClasses} ${alignClasses[align]} ${className}`}
      {...props}
    >
      {eyebrow && (
        <div className="relative inline-flex px-4 py-2">
          <span
            aria-hidden="true"
            className="
        absolute left-0 top-0
        h-3 w-3
        rounded-tl-md
        border-l-2 border-t-2
        border-tea-blue
      "
          />

          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            {eyebrow}
          </p>

          <span
            aria-hidden="true"
            className="
        absolute bottom-0 right-0
        h-3 w-3
        rounded-br-md
        border-b-2 border-r-2
        border-tea-orange
      "
          />
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}