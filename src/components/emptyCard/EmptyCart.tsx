import { FC } from "react";
import styles from "./EmptyCart.module.scss";
import { EmptyCartProps } from "./EmptyCart.props";
import EmtyIcon from "../../assets/cart-empty.svg";
import { Link } from "react-router-dom";

export const EmptyCard: FC<EmptyCartProps> = ({
	title,
	description,
	...props
}: EmptyCartProps): JSX.Element => {
	return (
		<div className={styles.cart}>
			<h1 className={styles.cartTitle}>{title}</h1>
			<p className={styles.cartDesc}>
				Вероятней всего, вы не заказывали ещё пиццу.<br></br>
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src={EmtyIcon} alt={title} className={styles.cartImg} />
			<Link to="/">
				<button className={styles.cartButton}>Вернуться назад</button>
			</Link>
		</div>
	);
};
