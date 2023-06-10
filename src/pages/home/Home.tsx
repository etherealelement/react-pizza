import { FC } from "react";
import { CartList } from "../../components/cardList/cardList";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.props";
import { Pagination } from "../../components/pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import {setCurrentPage} from "../../redux/filter/slice.ts";



export const Home: FC<HomeProps> = (): JSX.Element => {
	// Получение стейта из redux
	const dispatch = useDispatch();
	const { categoryId, sort, currentPage } = useSelector((state: any) => state.filter);

	// Изменение категории;


	const onChangePage = (number: number) => {
		dispatch(setCurrentPage(number));
	};

	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.cartTitle}>Все пиццы</h2>
				<CartList
					currentPage={currentPage}
					categoryId={categoryId}
					sortType={sort.sortProperty}
				></CartList>
				<Pagination value={currentPage} onChangePage={onChangePage}></Pagination>
			</div>
		</>
	);
};
