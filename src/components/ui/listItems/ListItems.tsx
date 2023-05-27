import { FC } from "react";
import styles from "./ListItems.module.scss";
import { ListItemsProps } from "./ListItems.props";
import cn from "classnames";

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
			className={cn(styles.li, className, {
				[styles.active]: activeId === index ? "default" : "active",
				[styles.default]: state === "default",
			})}
			{...props}
		>
			{children}
		</li>
	);
};
