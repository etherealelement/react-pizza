import {FC, useState} from "react";
import styles from "./cartItem.module.scss";
import { CardItemProps } from "./cartItem.props";
import { ReactComponent as PlusItem } from "../../assets/plusicon.svg";
import { ReactComponent as MinusItem } from "../../assets/minus.svg";
import {useDispatch, useSelector} from "react-redux";
import {addItem, minusItem, removeItem, selectCartItemById} from "../../redux/slices/cartSlice/cartSlice.ts";
import clsx from "clsx";
import {CartItemProps} from "../cardItem/CardItem.props.ts";

const typeNames = ["тонкое", "традиционное"];

export const CardItem: FC<CardItemProps> = ({
	id,
	price,
	types,
	title,
	imageUrl,
	size,
	count
}: CardItemProps): JSX.Element => {
	const dispatch =useDispatch();
	const cartItem = useSelector(selectCartItemById(id))
	const [activeType, setActiveType] = useState(0);
	const [activeSize, setActiveSize] = React.useState(0);


	const addedCount = cartItem ? cartItem.count : 0;

	const onClickAdd = () => {
		const item: CartItemProps = {
			id,
			title,
			price,
			imageUrl,
			type: typeNames[activeType],
			size: size[activeSize],
			count: 0,
		};
		dispatch(addItem(item))
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
						<button
							className={clsx({[styles.disableBtnMinus]: count === 1})}
							disabled={count === 1}
							onClick={onClickMinus}>
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
