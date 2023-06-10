import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import {SortPropertyEnum} from "../../redux/filter/types.ts";
import {Sort} from "../../redux/filter/types.ts";


export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value?: {
    name?: string,
    sortProperty?: string;
  };
  onChangeSort?: (id: any) => any;
}

export interface SortValueProps  {
    value: Sort;
}

export interface  SortListProps {
  name: string;
  sortProperty: SortPropertyEnum;
}

