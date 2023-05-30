import { FC, useState } from "react";
import styles from "./ListItems.module.scss";
import { ListItemsProps } from "./ListItems.props";
import cn from "classnames";


export const ListItems: FC<ListItemsProps> = ({
	children,
	state,
	activeId,
	className,
	index,
	stateActive,
	...props
}): JSX.Element => {

	

	return (
		<li
			className={cn(styles.listItem, className, {
				[styles.listItemActive]: activeId === index,
				[styles.listItemDefault]: activeId !== index,
			})}
			{...props}
		>
			{children}
		</li>
	);
};
