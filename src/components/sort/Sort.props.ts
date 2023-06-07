import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value?: {
    name?: string,
    sortProperty?: string;
  };
  onChangeSort?: (id: any) => any;
}

export interface  SortListProps {
  name: string;
  sortProperty: string;
}

