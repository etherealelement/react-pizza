import { FC, useState } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";
import { ReactComponent as Plus } from '../../../assets/plus.svg';

export const Button: FC<ButtonProps> = ({
	variant = "actived",
	className,
	children,
	isPlus,
	...props
}): JSX.Element => {
	const [plus, setPlus] = useState(false);


	return (
		<>
			<button
				className={cn(styles.button, className, {
					[styles.default]: variant === "default",
					[styles.actived]: variant === "actived",
					[styles.primary]: plus === true,
				})}
				{...props}
				onClick={() => setPlus(true)}
			>
			{plus ? <span className={styles.span}>Добавлено !</span> : <><Plus className={styles.plus}></Plus><span className={styles.span}>{children}</span></>}
			</button>
		</>
	);
};
