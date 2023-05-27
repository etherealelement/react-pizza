import "./App.scss";
import { CartItem } from "./components/cartItem/CartItem";
import { Categories } from "./components/categories/Categories";
import { Header } from "./components/header/Header";
import { Sort } from "./components/sort/Sort";

import Cart1 from "./assets/cartItems/cart-1.png";
import { CartList } from "./components/cartList/cartList";

function App() {
	return (
		<>
			<Header
				totalProduct={3}
				subtitle={"самая вкусная пицца во вселенной"}
				totalPrice={520}
			>
				REACT PIZZA
			</Header>
			<div className="container">
				<div className="filter-wrapper">
					<Categories></Categories>
					<Sort></Sort>
				</div>
				<h2 className="cart-title">Все пиццы</h2>
				<CartList></CartList>
			</div>
		</>
	);
}

export default App;
