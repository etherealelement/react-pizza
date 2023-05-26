import "./App.scss";
import { CartItem } from "./components/cartItem/CartItem";
import { Categories } from "./components/categories/Categories";
import { Header } from "./components/header/Header";
import { Sort } from "./components/sort/Sort";

import Cart1 from "./assets/cartItems/cart-1.png";

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
				<h2>Все пиццы</h2>
				<CartItem image={Cart1} price={344}>Чизбургер-пицца</CartItem>
			</div>
		</>
	);
}

export default App;
