import { FC, useState, useContext } from "react";
import { Categories } from "../../components/categories/Categories";
import { Sort } from "../../components/sort/Sort";
import { CartList } from "../../components/cardList/cardList";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.props";
import { Pagination } from "../../components/pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../../redux/slices/filterSlice";
import qs from "qs";
import { EmptyCard } from "../../components/emptyCard/EmptyCart";


export const Home: FC<HomeProps> = ({ ...props }: HomeProps): JSX.Element => {
	// Получение стейта из redux
	const dispatch = useDispatch();
	const { categoryId, sort, currentPage } = useSelector((state) => state.filter);

	// Изменение категории;
	const onChangeCategory = (id: number) => {
		dispatch(setCategoryId(id));
	};

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.filterWrapper}>
					<Categories
						value={categoryId}
						onChangeCategory={onChangeCategory}
					></Categories>
					<Sort></Sort>
				</div>
				<h2 className={styles.cartTitle}>Все пиццы</h2>

				<CartList
					currentPage={currentPage}
					categoryId={categoryId}
					sortType={sort.sortProperty}
				></CartList>
				<Pagination value={currentPage} onChangePage={onChangePage}></Pagination>
				<EmptyCard
				title={"Корзина пустая 😕"}></EmptyCard>
			</div>
		</>
	);
};
