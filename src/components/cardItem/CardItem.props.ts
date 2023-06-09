import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    size: number[];
    types: number[];
    rating: number;
}


export interface  OnClickItemProps {
    itemId: number | string | undefined,
    children?:  ReactNode;
    price: number | string | undefined,
    image: string,
    type: string[number],
    size:number,
}