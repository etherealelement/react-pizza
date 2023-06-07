import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    image: string;
    children: ReactNode;
    cartDescr: string[];
    cartSize: number[];
    price?: number;
    activeType?: number;
    itemId?: number;
    category?: number;
    rating?: number;
    sizes?: number;
}


export interface  OnClickItemProps {
    id: number | string | undefined,
    children?:  ReactNode;
    price: number | string | undefined,
    image: string,
    type: string[number],
    size:number,
}