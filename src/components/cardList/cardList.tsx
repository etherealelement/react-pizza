import { FC, useState, useEffect, useContext} from "react";
import styles from "./cardList.module.scss";
import { ListItems } from "../ui/listItems/ListItems";
import { CartItem } from "../cardItem/CardItem";
import axios from "axios";
import { PRODUCT_DATA } from "../../helpers/serverURL";
import { SkeletonLoader } from "../../helpers/skeleton";
import { CardListProps } from "./cardList.props";
import { dataResponse } from "./cardList.props";
import { CartItemProps } from "../cardItem/CardItem.props";
import { SearchContext } from "../../App";


export const CartList: FC<CardListProps> = ({
	categoryId,
	sortType,
	currentPage,
	...props
}: CardListProps): JSX.Element => {
	const { searchValue } = useContext(SearchContext);

	// isLoadingFlag
	const [isLoading, setIsLoading] = useState(true);
	//  dataFetching
	const [productArray, setProductArray] = useState<number[]>([]);
	const order = sortType?.includes("-") ? "asc" : "desc";
	const sortBy = sortType?.replace("-", "");
	const category = categoryId > 0 ? `category=${categoryId}` : "";
	const search = searchValue ? `&search=${searchValue}` : "";
	
	useEffect(() => {
		setIsLoading(true);
		const LoadData = async () => {
			try {
				const { data }  = await axios.get(
					`${PRODUCT_DATA}page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
				);
				setProductArray(data);
				setIsLoading(false);
			} catch (error) {
				alert("Не удалось получить данные, попробуйте позже.");
			}
		};
		LoadData();
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);

	// filtredPizzas
	const pizzas = productArray.filter((item:dataResponse) => {
		if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
			return true;
		}

		return false;
	}).map((item: any, index) => {
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
	});

	// SkeletonLoader

	const skeletonLoader = [...new Array(9)].map((_, index) => (
		<SkeletonLoader
			key={index}
			className={styles.skeleton}
		></SkeletonLoader>
	));

	return (
		<div className={styles.gridInner}>
			{isLoading ? skeletonLoader : pizzas}
		</div>
	);
};
