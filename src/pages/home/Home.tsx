import { FC, useState, useContext } from "react";
import { Header } from "../../components/header/Header";
import { Categories } from "../../components/categories/Categories";
import { Sort } from "../../components/sort/Sort";
import { CartList } from "../../components/cardList/cardList";
import styles from "./Home.module.scss";
import { NotFound } from "../../components/notfound/NotFound";
import { HomeProps } from "./Home.props";
import { Pagination } from "../../components/pagination/Pagination";
import { SearchContext } from "../../App";



export const Home: FC<HomeProps> = ({ ...props }: HomeProps): JSX.Element => {
	// Функция смены категории
	const [currentPage, setCurrentPage] = useState(1)
	const [categoryId, setCategoryId] = useState(0);
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
						onChangeCategory={(id) => setCategoryId(id)}
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
