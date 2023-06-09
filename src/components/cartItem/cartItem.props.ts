import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';



export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    types?: string;
    image?: string;
    count: number;
    children?: ReactNode;
    cartDescr: number[];
    cartSize: number[];
    price: number;
    activeType?: number;
    itemId?: number;
    category?: number;
    rating?: number;
    size: number;
}