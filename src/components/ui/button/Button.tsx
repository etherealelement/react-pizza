import { FC, useState } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";
import { ReactComponent as Plus } from "../../../assets/plus.svg";

export const Button: FC<ButtonProps> = ({
	variant = "actived",
	className,
	children,
	isPlus,
	isCount = true,
	...props
}): JSX.Element => {
	const [itemCount, setItemCount] = useState(0);

	return (
		<>
			<button
				className={cn(styles.button, className, {
					[styles.default]: variant === "default",
					[styles.black]: variant === "black",
				})}
				{...props}
				onClick={() => setItemCount(itemCount + 1)}
			>
				
					{isPlus === true && <Plus className={styles.plusName}></Plus>}
					{children}
				
				{isCount && <span className={styles.itemSpan}>{itemCount}</span>}
			</button>
		</>
	);
};
