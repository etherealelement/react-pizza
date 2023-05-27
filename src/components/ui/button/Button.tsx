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
	const [plus, setPlus] = useState(0);

	return (
		<>
			<button
				className={cn(styles.button, className, {
					[styles.default]: variant === "default",
					[styles.actived]: variant === "actived",
				})}
				{...props}
				onClick={() => setPlus(plus + 1)}
			>
				<>
					<Plus className={styles.plus}></Plus>
					<span className={styles.span}>
						{children}{" "}
						{plus === 0 ? null : <span className={styles.cartCounter}>{plus}</span>}
					</span>
				</>
			</button>
		</>
	);
};
