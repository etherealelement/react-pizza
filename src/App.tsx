import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { NotFound } from "./components/notfound/NotFound";

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
			<Routes>
				<Route
					path="*"
					element={<NotFound></NotFound>}
				></Route>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes>
		</>
	);
}

export default App;
