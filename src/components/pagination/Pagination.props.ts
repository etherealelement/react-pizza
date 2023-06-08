import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onChangePage: ((i: number) => void);
    value: number;
}