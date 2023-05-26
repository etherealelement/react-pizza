import "./App.scss";
import { Header } from "./components/header/Header";

function App() {
	return <>
  <Header  totalProduct={3} subtitle={"самая вкусная пицца во вселенной"} totalPrice={520}>REACT PIZZA</Header>
  </>;
}

export default App;
