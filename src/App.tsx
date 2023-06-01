import { Home } from "./pages/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header/Header";
import { NotFound } from "./components/notfound/NotFound";
import { Cart } from "./pages/cart/Cart";
import { createContext, useState } from "react";

export const SearchContext = createContext();

function App() {

	const [searchValue, setSearchValue] = useState("");
	return (
		<>
			<SearchContext.Provider value={{searchValue, setSearchValue}}>
				<Header
					totalProduct={3}
					subtitle={"самая вкусная пицца во вселенной"}
					totalPrice={520}
				
				>
					REACT PIZZA
				</Header>
				<Routes>
					<Route path="*" element={<NotFound></NotFound>}></Route>
					<Route
						path="/"
						element={<Home></Home>}
					></Route>
					<Route path="/cart" element={<Cart></Cart>}></Route>
				</Routes>
			</SearchContext.Provider>
		</>
	);
}

export default App;
