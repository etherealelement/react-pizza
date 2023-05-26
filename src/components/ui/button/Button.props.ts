import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	variant?: "default" | "actived";
	children: ReactNode;
	isPlus: boolean;
} 