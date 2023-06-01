import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
 children: string;   
 searchValue?: string;
 setSearchValue?: ((id: string)=> string);
}