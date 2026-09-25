// appunti: devo centrare il contenuto, limitarne la larghezza max, gestire padding orizzontale
import type {
  ContainerProps,
  ContainerSize,
} from "./Container.types";

const baseClasses =
  "mx-auto w-full px-4 sm:px-6 lg:px-8";

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  children,
  size = "xl",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}