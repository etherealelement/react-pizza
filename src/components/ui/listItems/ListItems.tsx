import { FC } from "react";
import styles from "./ListItems.module.scss";
import { ListItemsProps } from "./ListItems.props";


export const ListItems: FC<ListItemsProps> = ({
	children,
	state,
	className,
	activeId,
	index,
	...props
}): JSX.Element => {
	return (
		<li
			className={activeId === state ? styles.active : styles.default}
			{...props}
		>
			{children}
		</li>
	);
};
