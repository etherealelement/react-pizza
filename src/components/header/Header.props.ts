import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    subtitle?: string;
    totalPrice: number;
    totalProduct: number;
}