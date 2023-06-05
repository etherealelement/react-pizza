import { Home } from "./pages/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header/Header";
import { NotFound } from "./components/notfound/NotFound";
import { Cart } from "./pages/home/cart/Cart";
import { createContext, useState } from "react";
import { EmptyCart } from "./components/emptyCard/EmptyCart";
import { FullPizza } from "./pages/fullpizza/FullPizza";
// context
export const SearchContext = createContext();

function App() {
	const [searchValue, setSearchValue] = useState("");
	// счетчик на Redux

	return (
		<>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header
					subtitle={"самая вкусная пицца во вселенной"}
				>
					REACT PIZZA
				</Header>
				<Routes>
					<Route path="*" element={<NotFound></NotFound>}></Route>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/cart" element={<Cart></Cart>}></Route>
					<Route path="/pizza/:id" element={<FullPizza></FullPizza>}></Route>
				</Routes>
			</SearchContext.Provider>
		</>
	);
}

export default App;


