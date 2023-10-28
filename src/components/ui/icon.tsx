import { LucideProps, icons } from "lucide-react";

export type IconNameOptions = keyof typeof icons;

type IconProps = {
  name: IconNameOptions;
  color?: string;
  size?: LucideProps["size"];
  strokeWidth?: LucideProps["strokeWidth"];
};

export const Icon = ({ name, color, size, strokeWidth }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} strokeWidth={strokeWidth} />;
};
