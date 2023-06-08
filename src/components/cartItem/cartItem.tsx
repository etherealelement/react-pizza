import { FC } from "react";
import styles from "./cartItem.module.scss";
import { CardItemProps } from "./cartItem.props";
import { ReactComponent as PlusItem } from "../../assets/plusicon.svg";
import { ReactComponent as MinusItem } from "../../assets/minus.svg";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice/cartSlice.ts";

export const CardItem: FC<CardItemProps> = ({
	id,
	price,
	descr,
	title,
	image,
	count,
	size,
}: CardItemProps): JSX.Element => {
	const productSizes = [26, 30, 40];
	const dispatch = useDispatch();

	const onClickPlus = () => {
		dispatch(
			addItem({
				id,
			})
		);
	};

	const onClickMinus = () => {
		dispatch(minusItem(id));
	};

	const onClickRemove = () => {
		if (window.confirm("Подтвердить удаление товара")) {
			dispatch(removeItem(id));
		}
	};

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
						<p className={styles.cartItemBlockDescr}>
							{descr}, {productSizes[size]} см.
						</p>
					</span>
				</div>
				<div className={styles.cartItemCounter}>
					<span>
						<button onClick={onClickMinus}>
							<MinusItem></MinusItem>
						</button>
						{count}
						<button onClick={onClickPlus}>
							<PlusItem></PlusItem>
						</button>
					</span>
					<p className={styles.cartItemPrice}>{price * count} ₽</p>
					<button
						onClick={onClickRemove}
						className={styles.cartItemPriceClose}
					>
						<PlusItem></PlusItem>
					</button>
				</div>
			</li>
		</>
	);
};
