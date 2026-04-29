export type CardGradientPosition = {
  x: string;
  y: string;
};

export type BasicTextCard = {
  id?: string;
  title: string;
  body: string;
  gradientPosition?: CardGradientPosition;
  surface?: "background" | "plain";
};
