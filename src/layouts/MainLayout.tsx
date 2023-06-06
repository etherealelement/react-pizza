import { FC } from "react";
import styles from "./MainLayout.module.scss";
import { Header } from "../components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Cart } from "../pages/home/cart/Cart";
import { FullPizza } from "../pages/fullpizza/FullPizza";
import { NotFound } from "../components/notfound/NotFound";

export const MainLayout: FC = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header subtitle={"самая вкусная пицца во вселенной"}>
				REACT PIZZA
			</Header>
			<Routes>
				<Route path="*" element={<NotFound></NotFound>}></Route>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/cart" element={<Cart></Cart>}></Route>
				<Route
					path="/pizza/:id"
					element={<FullPizza></FullPizza>}
				></Route>
			</Routes>
		</div>
	);
};
