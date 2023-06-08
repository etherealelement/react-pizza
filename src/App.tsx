import { createContext, useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
// context
// @ts-ignore
export const SearchContext:React.Context<string> = createContext();

function App():JSX.Element {
	const [searchValue, setSearchValue] = useState("");
	// счетчик на Redux


	return (
		<>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<MainLayout></MainLayout>
			</SearchContext.Provider>
		</>
	);
}

export default App;
