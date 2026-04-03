export type CtaLink = {
  text: string;
  href: string;
};

export type CtaSectionContent = {
  eyebrow?: string;
  title: string;
  body?: string;
  primary: CtaLink;
  secondary?: CtaLink;
};
