import { FC, useState, useEffect, useContext, useRef } from "react";
import styles from "./cardList.module.scss";
import { CartItem } from "../cardItem/CardItem";
import axios from "axios";
import { PRODUCT_DATA } from "../../helpers/serverURL";
import { SkeletonLoader } from "../../helpers/skeleton";
import { CardListProps } from "./cardList.props";
import { SearchContext } from "../../App";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { sortList } from "../sort/Sort";
import { setFilters } from "../../redux/slices/filterSlice";
import { NotFound } from "../notfound/NotFound";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";

export const CartList: FC<CardListProps> = ({
	categoryId,
	sortType,
	currentPage,
}: CardListProps): JSX.Element => {
	const dispatch = useDispatch();
	const isSearch = useRef(false);
	const isMounted = useRef(false);
	const navigate = useNavigate();
	// const { item, state } = useSelector(selectPizza);
	const { searchValue } = useContext<string | any>(SearchContext);
	const [isLoading, setIsLoading] = useState(true);
	const [productArray, setProductArray] = useState<number[]>([]);
	const order = sortType?.includes("-") ? "asc" : "desc";
	const sortBy = sortType?.replace("-", "");
	const category = categoryId > 0 ? `category=${categoryId}` : "";
	const search = searchValue ? `&search=${searchValue}` : "";

	// Если бы первый рендер, то проверяем URL-параметры и сохраняем в редаксе
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = sortList.find(
				(obj) => obj.sortProperty === params.sortType
			);

			dispatch(
				setFilters({
					...params,
					sort,
				})
			);
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
		window.scrollTo(0, 0);
		return LoadData();

	};

	// loading data
	useEffect(() => {
		window.scrollTo(0, 0);

		if (!isSearch.current) {
			fetchPizzas();
		}

		isSearch.current = false;
	}, [categoryId, sortType, searchValue, currentPage]);
	//

	// Если изменили параметры и был первый рендер
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
	console.log(productArray);
	const pizzas = productArray
		.filter((item: any) => {
			if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			}

			return false;
		})
		.map((item: any) => {
			return (
				<Link key={item.id} to={`/pizza/${item.id}`}>
				<CartItem
					sizes={item.size}
					id={item.id}
					image={item.imageUrl}
					cartDescr={item.types}
					cartSize={item.sizes}
					price={item.price}
					category={item.category}
					rating={item.rating}
				>
					{item.title}
				</CartItem>
				</Link>
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
		<>
			{pizzas.length === 0 ? (
				<NotFound></NotFound>
			) : (
				<div className={styles.gridInner}>
					{isLoading ? skeletonLoader : pizzas}
				</div>
			)}
		</>
	);
};
