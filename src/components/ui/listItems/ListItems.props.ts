import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReactNode } from "react";


export interface ListItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	children: ReactNode;
    state: number;
    activeId?: number;
    index?: number;
    stateActive?: number;
}
