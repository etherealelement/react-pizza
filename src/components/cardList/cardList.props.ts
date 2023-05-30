import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categoryId?: number;
  sortType?: number;
} 