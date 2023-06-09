import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import {SortPropertyEnum, SortType} from "../../redux/slices/filterSlice/filterSlice.interfaces.ts";


export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value?: {
    name?: string,
    sortProperty?: string;
  };
  onChangeSort?: (id: any) => any;
}

export interface SortValueProps  {
    value: SortType;
}

export interface  SortListProps {
  name: string;
  sortProperty: SortPropertyEnum;
}

