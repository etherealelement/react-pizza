import { FC, useState, useEffect } from "react";
import styles from "./Cart.module.scss";
import { ReactComponent as Logo } from "../../../assets/cartLogo.svg";
import { ReactComponent as TrashIcon } from "../../../assets/trash-image.svg";
import axios from "axios";
import { PRODUCT_DATA } from "../../../helpers/serverURL";
import { ReactComponent as ArrowGhost } from "../../../assets/ghost-arrow.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CardItem } from "../../../components/cartItem/cartItem";
import { clearItems, removeItem } from "../../../redux/slices/cartSlice";
import { EmptyCard } from "../../../components/emptyCard/EmptyCart";

export const Cart: FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const { totalPrice, items } = useSelector((state) => state.cart);
	// dataFetching

	const onClickClear = () => {
		if (window.confirm("Очистить корзину ?")) {
			dispatch(clearItems());
		}
	};

	const totalCount = items.reduce((acc, item) => {
		return acc + item.count;
	}, 0);

	useEffect(() => {
		const loadData = async () => {
			const { data } = await axios.get(PRODUCT_DATA);
			setProcuct(data);
		};
		loadData();
	}, []);

	if (!totalPrice) {
		return <EmptyCard title={"Корзина пустая 😕"}></EmptyCard>;
	}

	return (
		<div className={styles.cart}>
			<div className={styles.container}>
				<div className={styles.cartHeader}>
					<div className={styles.cartHeaderLogo}>
						<div className={styles.cartHeaderWrapper}>
							<Logo></Logo>
							<h1 className={styles.cartHeaderTitle}>Корзина</h1>
						</div>
						<button
							onClick={onClickClear}
							className={styles.cartHeaderClearButton}
						>
							<span>
								<TrashIcon></TrashIcon>
							</span>
							Очистить корзину
						</button>
					</div>
					<ul>
						{items.map((item: any, index) => {
							return (
								<CardItem
									id={item.id}
									key={item.id}
									title={item.children}
									descr={item.type}
									size={item.size}
									{...item}
								></CardItem>
							);
						})}
					</ul>
				</div>
				<div className={styles.cartTotal}>
					<span className={styles.cartTotalProduct}>
						Всего пицц: <span>{totalCount} шт.</span>
					</span>
					<span className={styles.cartTotalPrice}>
						Сумма заказа: <span>{totalPrice} ₽</span>
					</span>
				</div>
				<div className={styles.blockButton}>
					<Link to="/">
						<button className={styles.blockButtonBack}>
							<ArrowGhost className={styles.blockButtonBackSvg}></ArrowGhost>
							Вернуться назад
						</button>
					</Link>
					<button className={styles.blockButtonPayment}>Оплатить сейчас</button>
				</div>
			</div>
		</div>
	);
};
