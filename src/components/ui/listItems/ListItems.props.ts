import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReactNode } from "react";


export interface ListItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	children: ReactNode;
    state: "default" | "active";
    activeId: number;
    index: number;
}
