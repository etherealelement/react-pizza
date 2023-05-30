import { FC, useState } from "react";
import { Header } from "../../components/header/Header";
import { Categories } from "../../components/categories/Categories";
import { Sort } from "../../components/sort/Sort";
import { CartList } from "../../components/cardList/cardList";
import styles from "./Home.module.scss";
import { NotFound } from "../../components/notfound/NotFound";

export const Home: FC = (): JSX.Element => {
	// Функция смены категории 
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState();


	return (
		<>
			<div className={styles.container}>
				<div className={styles.filterWrapper}>
					<Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}></Categories>
					<Sort></Sort>
				</div>
				<h2 className={styles.cartTitle}>Все пиццы</h2>
								
				<CartList categoryId={categoryId}></CartList>
			</div>
		</>
	);
};
