import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import {SortType} from "../../redux/slices/filterSlice/filterSlice.interfaces.ts";

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categoryId: number;
  sortType?: SortType;
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