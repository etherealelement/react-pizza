import { FC } from "react";
import styles from "./CartItem.module.scss";
import { CartItemProps } from "./CartItem.props";
import { Button } from "../ui/button/Button";

export const CartItem: FC<CartItemProps> = ({
	children,
	cartDescr,
	image,
	cartSize,
	price,
	className,
	...props
}: CartItemProps): JSX.Element => {
	return (
		<>
			<div className={styles.cartItem}>
				<div className={styles.cartItemWrapper}>
					<img src={image} alt="cart-image" />
					<h2 className={styles.cartItemTitle}>{children}</h2>
					<div className={styles.cartItemSelector}>
						<ul>
							{cartDescr.map((item, index)=> <li key={index}>{item}</li>)}
						</ul>
						<ul>{cartSize.map((item, index)=> <li key={index}>{item} см.</li>)}</ul>
					</div>
					<div className={styles.cartItemPriceBLock}>
						<b className={styles.cartItemPrice}>от {price} ₽</b>
						<Button isPlus={true} variant={"default"}>
							Добавить
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};
