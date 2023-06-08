import { createContext, useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
// context
// @ts-ignore
export const SearchContext: ProviderProps<string> = createContext<string>();

function App():JSX.Element {
	const [searchValue, setSearchValue] = useState<string>("");
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
