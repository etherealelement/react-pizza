import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    image: string;
    children: ReactNode;
    cartDescr: string[];
    cartSize: number[];
    price: number;
} 