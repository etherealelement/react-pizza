
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';



export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string;
    title: string;
    type: string;
    size: number;
    price: number;
    count: number;
    imageUrl: string;
}