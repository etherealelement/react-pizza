import { FC, useState, useEffect } from "react";
import styles from "./cardList.module.scss";
import { ListItems } from "../ui/listItems/ListItems";
import { CartItem } from "../cardItem/CardItem";
import axios from "axios";
import { PRODUCT_DATA } from "../../helpers/serverURL";
import { SkeletonLoader } from "../../helpers/skeleton";
import { CardListProps } from "./cardList.props";

export const CartList: FC<CardListProps> = ({
	categoryId,
	sortType,
}: CardListProps): JSX.Element => {
	// isLoadingFlag
	const [isLoading, setIsLoading] = useState(true);
	//  dataFetching
	const [productArray, setProductArray] = useState<number[]>([]);
	useEffect(() => {
		setIsLoading(true);
		const LoadData = async () => {
			try {
				const { data } = await axios.get(`${PRODUCT_DATA}${categoryId > 0 ? `category=${categoryId}` : ''}`);
				setProductArray(data);
				setIsLoading(false);
			} catch (error) {
				alert("Не удалось получить данные, попробуйте позже.");
			}
		};
		LoadData();
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);

	return (
		<div className={styles.gridInner}>
			{isLoading
				? [...new Array(9)].map((_, index) => (
						<SkeletonLoader
							key={index}
							className={styles.skeleton}
						></SkeletonLoader>
				  ))
				: productArray.map((item: any, index) => {
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
