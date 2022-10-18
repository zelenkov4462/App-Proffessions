import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import up from "../../public/up.svg";
import cross from "../../public/cross.svg";
import menu from "../../public/menu.svg";

export const icons = {
  up,
  cross,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "white";
  icon: IconName;
}
