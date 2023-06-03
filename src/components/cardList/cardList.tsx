import { FC, useState, useEffect, useContext, useRef } from "react";
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
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../../redux/slices/filterSlice";
import {  useDispatch } from "react-redux";
import { sortList } from "../sort/Sort";


export const CartList: FC<CardListProps> = ({
	categoryId,
	sortType,
	currentPage,
	...props
}: CardListProps): JSX.Element => {
	// Получение данных из Redux
	const dispatch = useDispatch();
	// Получение ссылок

	const isSearch = useRef(false);
	const isMounted = useRef(false);

	// 
	const navigate = useNavigate();
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
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = sortList.find(obj => obj.sortProperty === params.sortType)

			dispatch(
				setFilters({
					...params,
					sort
				}),
			)
			isSearch.current = true;
		}
	}, []);

	// fetchPizzas 
	const fetchPizzas = () => {
		setIsLoading(true);
		const LoadData = async () => {
			try {
				const { data } = await axios.get(
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
	}

	// loading data
	useEffect(() => {
		window.scrollTo(0, 0);

		if (!isSearch.current) {
			fetchPizzas();
		}

		isSearch.current = false;

	}, [categoryId, sortType, searchValue, currentPage]);
	//

	// Parsing
	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortType,
				categoryId,
				currentPage,
			});
	
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sortType, searchValue, currentPage]);

	// filtredPizzas
	const pizzas = productArray
		.filter((item: any) => {
			if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			}

			return false;
		})
		.map((item: any, index) => {
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
		<SkeletonLoader key={index} className={styles.skeleton}></SkeletonLoader>
	));

	return (
		<div className={styles.gridInner}>
			{isLoading ? skeletonLoader : pizzas}
		</div>
	);
};
