import { FC } from "react";
import styles from "./cartItem.module.scss";
import { CardItemProps } from "./cartItem.props";
import { ReactComponent as PlusItem } from "../../assets/plusicon.svg";
import { ReactComponent as MinusItem } from "../../assets/minus.svg";

export const CardItem: FC<CardItemProps> = ({
	price,
	descr,
	title,
	image,
	...props
}: CardItemProps): JSX.Element => {
	return (
		<>
		<li className={styles.cartItem}>
			<div className={styles.cartItemBlock}>
				<img
					src={image}
					alt={title}
					className={styles.cartItemBlockImg}
				/>
				<span>
					<h3 className={styles.cartItemBlockTitle}>{title}</h3>
					<p className={styles.cartItemBlockDescr}>{descr}</p>
				</span>
			</div>
			<div className={styles.cartItemCounter}>
				<span>
					<button><MinusItem></MinusItem></button>2<button><PlusItem></PlusItem></button>
				</span>
				<p className={styles.cartItemPrice}>{price} ₽</p>
				<button><PlusItem></PlusItem></button>
			</div>
		</li>
		</>
	);
};
