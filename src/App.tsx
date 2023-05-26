import "./App.scss";
import { Categories } from "./components/categories/Categories";
import { Header } from "./components/header/Header";
import { Sort } from "./components/sort/Sort";

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
			</div>
		</>
	);
}

export default App;
