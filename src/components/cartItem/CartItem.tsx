import { FC } from "react";
import styles from "./CartItem.module.scss";
import { CartItemProps } from "./CartItem.props";
import { Button } from "../ui/button/Button";

export const CartItem: FC<CartItemProps> = ({
	children,
	cartParams,
	image,
	price,
	className,
	...props
}: CartItemProps): JSX.Element => {
	return (
		<>
			<li className={styles.li}>
                <img src={image} alt="cart-image" />
                <h2 className={styles.cartTitle}>{children}</h2>
                <ul className={styles.itemList}>
                    <li className={styles.listItem}>тонкое</li>
                    <li className={styles.listItem}>традиционное</li>
                    <li className={styles.listItem}>26 см.</li>
                    <li className={styles.listItem}>30 см.</li>
                    <li className={styles.listItem}>40 см.</li>
                </ul>
                <div className={styles.priceBLock}>
                    <b className={styles.price}>{price}</b>
                    <Button isPlus={true} variant={"default"}>Добавить</Button>
                </div>
            </li>
		</>
	);
};
