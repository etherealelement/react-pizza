import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

export type PizzaBlockProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
};


export interface  ICartItemProps {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}


export interface  OnClickItemProps {
    itemId: number | string | undefined,
    children?:  ReactNode;
    price: number | string | undefined,
    image: string,
    type: string[number],
    size:number,
}