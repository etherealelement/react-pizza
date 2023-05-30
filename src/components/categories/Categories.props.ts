import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface CategoriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>,HTMLUListElement>{
  value?: number;
  onChangeCategory: (item: any) => any;
}