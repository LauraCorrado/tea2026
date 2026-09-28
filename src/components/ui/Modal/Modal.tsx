import { useEffect, useId, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Minus, Plus, X } from "lucide-react";

import { IconButton } from "../IconButton";

import type { ModalProps, ModalSize } from "./Modal.types";

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
};

export function Modal({
  open,
  onClose,

  eyebrow,
  title,
  period,
  description,

  image,
  gallery,

  actions,
  children,

  size = "lg",
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = "",
}: ModalProps) {
  const titleId = useId();

  const [isGalleryDragging, setIsGalleryDragging] = useState(false);

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [zoom, setZoom] = useState(1);
  const imageViewportRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const galleryDidDrag = useRef(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({
    x: 0,
    y: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const galleryDragStart = useRef({
    x: 0,
    scrollLeft: 0,
  });

  function openImage(item: { src: string; alt: string }) {
    setSelectedImage(item);
    setZoom(1);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (zoom <= 1) return;

    const viewport = imageViewportRef.current;
    if (!viewport) return;

    viewport.setPointerCapture(event.pointerId);

    setIsDragging(true);

    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      scrollLeft: viewport.scrollLeft,
      scrollTop: viewport.scrollTop,
    };
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;

    const viewport = imageViewportRef.current;
    if (!viewport) return;

    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;

    viewport.scrollLeft = dragStart.current.scrollLeft - deltaX;

    viewport.scrollTop = dragStart.current.scrollTop - deltaY;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const viewport = imageViewportRef.current;

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  }

  function handleGalleryPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    galleryElement.setPointerCapture(event.pointerId);

    setIsGalleryDragging(true);
    galleryDidDrag.current = false;

    galleryDragStart.current = {
      x: event.clientX,
      scrollLeft: galleryElement.scrollLeft,
    };
  }

  function handleGalleryPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isGalleryDragging) return;

    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    const deltaX = event.clientX - galleryDragStart.current.x;

    if (Math.abs(deltaX) > 5) {
      galleryDidDrag.current = true;
    }

    galleryElement.scrollLeft = galleryDragStart.current.scrollLeft - deltaX;
  }

  function handleGalleryPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const galleryElement = galleryRef.current;

    if (galleryElement?.hasPointerCapture(event.pointerId)) {
      galleryElement.releasePointerCapture(event.pointerId);
    }

    setIsGalleryDragging(false);
  }

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (selectedImage) {
        setSelectedImage(null);
        setZoom(1);
        return;
      }

      onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, selectedImage]);

  if (!open) return null;

  return createPortal(
    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/60 p-4
    "
      onMouseDown={(event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={`
          relative
          max-h-[90vh] w-full
          overflow-y-auto
          rounded-xl bg-white
          shadow-xl
          ${sizeClasses[size]}
          ${className}
        `}
      >
        {showCloseButton && (
          <div className="absolute right-4 top-4 z-10">
            <IconButton
              icon={<X size={18} />}
              label="Chiudi finestra"
              animation="rotate"
              onClick={onClose}
            />
          </div>
        )}

        {image && (
          <div className="h-56 w-full overflow-hidden md:h-72 lg:h-80">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-tea-blue">
              {eyebrow}
            </p>
          )}

          {title && (
            <h2 id={titleId} className="text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          )}

          {period && (
            <p className="mt-2 text-sm font-medium opacity-60">{period}</p>
          )}

          {description && (
            <div className="mt-4 max-w-3xl leading-relaxed opacity-80">
              {description}
            </div>
          )}

          {gallery && gallery.length > 0 && (
            <div
              ref={galleryRef}
              className={`
      modal-gallery-scrollbar
      mt-6 flex gap-4 overflow-x-auto pb-3
      snap-x snap-proximity scroll-smooth
      touch-pan-x overscroll-x-contain
      select-none
      ${isGalleryDragging ? "cursor-grabbing" : "cursor-grab"}
    `}
              onPointerDown={handleGalleryPointerDown}
              onPointerMove={handleGalleryPointerMove}
              onPointerUp={handleGalleryPointerUp}
              onPointerCancel={handleGalleryPointerUp}
            >
              {gallery.map((item, index) => (
                <button
                  key={`${item.src}-${index}`}
                  type="button"
                  onClick={() => {
                    if (galleryDidDrag.current) {
                      return;
                    }

                    openImage(item);
                  }}
                  className="
          aspect-4/3
          w-[80%] shrink-0
          overflow-hidden rounded-lg
          snap-start
          sm:w-[45%]
          lg:w-[32%]
        "
                  aria-label={`Ingrandisci immagine: ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    draggable={false}
                    className="
            h-full w-full object-cover
            transition-transform duration-300
            hover:scale-105
          "
                  />
                </button>
              ))}
            </div>
          )}

          {children && <div className="mt-6">{children}</div>}

          {actions && (
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          )}
        </div>
      </div>
      {selectedImage && (
        <div
          className="
      fixed inset-0 z-60
      flex items-center justify-center
      bg-black/85 p-4
    "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedImage(null);
              setZoom(1);
            }
          }}
        >
          <div
            className="
        relative
        flex max-h-[90vh] max-w-[90vw]
        items-center justify-center
      "
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div
              ref={imageViewportRef}
              className={`
    lightbox-scrollbar
    max-h-[85vh] max-w-[90vw]
    overflow-auto
    select-none
    ${zoom > 1 ? "cursor-grab" : "cursor-default"}
    ${isDragging ? "cursor-grabbing" : ""}
  `}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                draggable={false}
                className="
      block
      max-h-[85vh] max-w-[90vw]
      object-contain
      transition-transform duration-200
      origin-center
    "
                style={{
                  transform: `scale(${zoom})`,
                }}
              />
            </div>

            <div
              className="
          absolute bottom-4 left-1/2
          flex -translate-x-1/2 items-center gap-2
          rounded-full
          bg-white/95 p-2
          shadow-lg backdrop-blur-sm
        "
            >
              <IconButton
                icon={<Minus size={18} />}
                label="Riduci immagine"
                disabled={zoom <= 1}
                onClick={() =>
                  setZoom((current) => Math.max(1, current - 0.25))
                }
              />

              <span
                className="
            min-w-12 text-center
            text-sm font-medium text-tea-black
          "
                aria-live="polite"
              >
                {Math.round(zoom * 100)}%
              </span>

              <IconButton
                icon={<Plus size={18} />}
                label="Ingrandisci immagine"
                disabled={zoom >= 2}
                onClick={() =>
                  setZoom((current) => Math.min(2, current + 0.25))
                }
              />

              <span aria-hidden="true" className="mx-1 h-6 w-px bg-black/15" />

              <IconButton
                icon={<X size={18} />}
                label="Chiudi immagine"
                animation="rotate"
                onClick={() => {
                  setSelectedImage(null);
                  setZoom(1);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
}