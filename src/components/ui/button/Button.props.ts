import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	text?:string;
	variant: "primary" | "actived";
} 