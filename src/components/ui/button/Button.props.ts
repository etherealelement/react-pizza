import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	variant?: "default" | "black" | "active";
	children?: ReactNode;
	isPlus: boolean;
	isCount?: boolean;
	cartItem?: number;
	addedCount: number;
	onClickAdd?: () => any;
} 