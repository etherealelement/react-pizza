import { FC, useState, useContext } from "react";
import { Categories } from "../../components/categories/Categories";
import { Sort } from "../../components/sort/Sort";
import { CartList } from "../../components/cardList/cardList";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.props";
import { Pagination } from "../../components/pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice";

export const Home: FC<HomeProps> = ({ ...props }: HomeProps): JSX.Element => {
	// Функция получения id
	const onChangeCategory = (id: number) => {
		console.log(id);
		dispatch(setCategoryId(id))
	};

	// Получение стейта из redux 
	const dispatch = useDispatch();
	const categoryId = useSelector(state => state.filter.categoryId);

	// Функция смены категории
	const [currentPage, setCurrentPage] = useState(1)
	const [sortType, setSortType] = useState({
		name: "популярности",
		sortProperty: "rating",
	});

	return (
		<>
			<div className={styles.container}>
				<div className={styles.filterWrapper}>
					<Categories
						value={categoryId}
						onChangeCategory={onChangeCategory}
					></Categories>
					<Sort
						value={sortType}
						onChangeSort={(id) => setSortType(id)}
					></Sort>
				</div>
				<h2 className={styles.cartTitle}>Все пиццы</h2>

				<CartList
					currentPage = {currentPage}
					categoryId={categoryId}
					sortType={sortType}
				></CartList>
				<Pagination onChangePage={number => setCurrentPage(number)}></Pagination>
			</div>
		</>
	);
};
