import { FC, useState } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";
import { ReactComponent as Plus } from "../../../assets/plus.svg";

export const Button: FC<ButtonProps> = ({
	variant = "actived",
	className,
	children,
	cartItem,
	isPlus,
	isCount = true,
	onClickAdd,
	addedCount,
	...props
}): JSX.Element => {
	const [itemCount, setItemCount] = useState(0);

	const addToCart = () => {
		setItemCount(itemCount + 1)
		onClickAdd();
	}
	
	return (
		<>
			<button
				className={cn(styles.button, className, {
					[styles.default]: variant === "default",
					[styles.black]: variant === "black",
				})}
				{...props}
				onClick={()=> addToCart()}
			>
				
					{isPlus === true && <Plus className={styles.plusName}></Plus>}
					{children}
				
				{cartItem && <span className={styles.itemSpan}>{addedCount}</span>}
			</button>
		</>
	);
};
