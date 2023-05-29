import { FC, useState, useEffect } from "react";
import styles from "./Cart.module.scss";
import { ReactComponent as Logo } from "../../assets/cartLogo.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash-image.svg";
import { CardItem } from "../../components/cartItem/cartItem";
import axios from "axios";
import { PRODUCT_DATA } from "../../helpers/serverURL";

export const Cart: FC = (): JSX.Element => {
	// dataFetching
	const [product, setProcuct] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const {data} = await axios.get(PRODUCT_DATA);
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
						{product.map((item: any, index)=> {
                            return <CardItem 
                            image={item.imageUrl}
                            price={item.price}
                            rating={item.rating}
                            cartDescr={item.types}
                            cartSize={item.size}
                            title={item.title}
							descr={"pizza"}
                            ></CardItem>
                        })}
					</ul>
				</div>
			</div>
		</div>
	);
};
