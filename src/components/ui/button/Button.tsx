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
	...props
}): JSX.Element => {
	const [itemCount, setItemCount] = useState(0);

	return (
		<>
			<button
				className={cn(styles.button, className, {
					[styles.default]: variant === "default",
					[styles.actived]: variant === "actived",
				})}
				{...props}
				onClick={() => setItemCount(itemCount + 1)}
			>
				
					<Plus className={styles.plusName}></Plus>
					{children}
				
				<span className={styles.itemSpan}>{itemCount}</span>
			</button>
		</>
	);
};
