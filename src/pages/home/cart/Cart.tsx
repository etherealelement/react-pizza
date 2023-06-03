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
import { removeItem } from "../../../redux/slices/cartSlice";

export const Cart: FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);
	// dataFetching
	const [product, setProcuct] = useState([]);

	const onClickClear= () => {
		if (window.confirm("Очистить корзину ?")) {
			dispatch(removeItem(id))
		}
	}


	useEffect(() => {
		const loadData = async () => {
			const { data } = await axios.get(PRODUCT_DATA);
			setProcuct(data);
		};
		loadData();
	}, []);

	return (
		<div className={styles.cart}>
			<div className={styles.container}>
				<div className={styles.cartHeader}>
					<div className={styles.cartHeaderLogo}>
						<div className={styles.cartHeaderWrapper}>
							<Logo></Logo>
							<h1 className={styles.cartHeaderTitle}>Корзина</h1>
						</div>
						<button className={styles.cartHeaderClearButton}>
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
									{...item}
								></CardItem>
							);
						})}
					</ul>
				</div>
				<div className={styles.cartTotal}>
					<span className={styles.cartTotalProduct}>
						Всего пицц: <span>{product.length} шт.</span>
					</span>
					<span className={styles.cartTotalPrice}>
						Сумма заказа: <span>900 ₽</span>
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
