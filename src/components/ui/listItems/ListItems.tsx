import { FC, useState } from "react";
import styles from "./ListItems.module.scss";
import { ListItemsProps } from "./ListItems.props";


export const ListItems: FC<ListItemsProps> = ({
	children,
	state,
	activeId,
	className,
	index,
	stateActive,
	...props
}): JSX.Element => {
	console.log(activeId);
	

	return (
		<li
			className={activeId === index ? styles.active : styles.default}
			{...props}
		>
			{children}
		</li>
	);
};
