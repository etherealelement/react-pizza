import { FC, useState, useEffect } from "react";
import styles from "./cartList.module.scss";
import { ListItems } from "../ui/listItems/ListItems";
import { CartItem } from "../cartItem/CartItem";
import axios from "axios";
import { PRODUCT_DATA } from "../../helpers/serverURL";
import { CartListProps } from "./cartList.props";

export const CartList: FC<CartListProps> = ({ ...props }): JSX.Element => {
	//  dataFetching
	const [productArray, setProductArray] = useState<number[]>([]);
	useEffect(() => {
		const LoadData = async () => {
			try {
				const { data } = await axios.get<CartListProps>(PRODUCT_DATA);
			setProductArray(data);
			console.log(productArray);
			} catch (error) {
				alert("Не удалось получить данные, попробуйте еще раз")
			}
		};
		LoadData();
	}, []);

	return (
		<div className={styles.gridInner}>
			{productArray.map((item: any, id) => {
				return (
					<CartItem
						key={item.id}
						image={item.imageUrl}
						cartDescr={item.types}
						cartSize={item.sizes}
						price={item.price}
						category={item.category}
						rating={item.rating}
					>
						{item.title}
					</CartItem>
				);
			})}
		</div>
	);
};
