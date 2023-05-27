import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    image: string;
    children: ReactNode;
    cartParams?: string[];
    price: number;
} 