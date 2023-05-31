import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
 children: string;   
 searchValue: string;
 setsearchValue: (()=> string) | undefined;
}