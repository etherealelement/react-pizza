import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categoryId: number;
  sortType?: {
    name: string,
    sortProperty: string;
  };
  searchValue?: string;
  currentPage?: number;
} 

export interface dataResponse { 
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}