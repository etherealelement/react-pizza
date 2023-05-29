import { FC } from "react";
import { Header } from "../../components/header/Header";
import { Categories } from "../../components/categories/Categories";
import { Sort } from "../../components/sort/Sort";
import { CartList } from "../../components/cartList/cartList";
import styles from "./Home.module.scss";
import { NotFound } from "../../components/notfound/NotFound";

export const Home: FC = (): JSX.Element => {
	return (
		<>
			<Header
				totalProduct={3}
				subtitle={"самая вкусная пицца во вселенной"}
				totalPrice={520}
			>
				REACT PIZZA
			</Header>

			<div className={styles.container}>
				<div className={styles.filterWrapper}>
					<Categories></Categories>
					<Sort></Sort>
				</div>
				<h2 className={styles.cartTitle}>Все пиццы</h2>
				<NotFound></NotFound>					
				{/* <CartList></CartList> */}
			</div>
		</>
	);
};
