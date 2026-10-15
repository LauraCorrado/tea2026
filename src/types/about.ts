import type { WorkArea } from "@/types/workArea";
import type { ModalImage } from "@/components/ui/Modal/Modal.types";

export type MacroAreaDetail = {
  id: string;

  title?: string;

  description: string;

  image: {
    src: string;
    alt: string;
  };

  imagePosition?: "left" | "right";

  cta?: {
    label: string;
    to: string;
    external?: boolean;
  };
};

export type ProjectLink = {
  label: string;
  to: string;
  external?: boolean;
};

export type ProjectCaseStudy = {
  title: string;
  description: string;

  image: {
    src: string;
    alt: string;
  };

  modal: {
    eyebrow?: string;
    period?: string;
    description: string;

    image?: ModalImage;

    gallery?: ModalImage[];

    content?: string;

    actions?: ProjectLink[];
  };
};

export type MacroArea = {
  id: WorkArea;

  details: MacroAreaDetail[];

  caseStudy: ProjectCaseStudy;
};