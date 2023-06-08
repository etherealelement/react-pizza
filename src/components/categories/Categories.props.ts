import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface CategoriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>,HTMLUListElement>{
  value?: number;
  onChangeCategory: (id: number) => void;
}

export interface UlArrayProps {
  name: string;
  state?: string | number;
  id: number;
}