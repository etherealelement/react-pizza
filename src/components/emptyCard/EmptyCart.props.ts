import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface EmptyCartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description?: string;
}