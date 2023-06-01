import { FC, useContext } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/searchIcons/172546_search_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/searchIcons/352270_close_icon.svg";
import { SearchContext } from "../../App";


export const Search: FC<SearchProps> = ({
	children,
	...props
}: SearchProps): JSX.Element => {
	const {searchValue, setSearchValue} = useContext(SearchContext);

	return (
		<>
			<div className={styles.root}>
				<input
					value={searchValue}
					onChange={(event) => setSearchValue(event.target.value)}
					placeholder={children}
					type="text"
					className={styles.rootInput}
				/>
				<SearchIcon className={styles.rootInputIcon}></SearchIcon>
				{searchValue.length > 0 && (
					<svg
						onClick={()=> setSearchValue("")}
						className={styles.rootClose}
						height="48"
						viewBox="0 0 48 48"
						width="48"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
						<path d="M0 0h48v48h-48z" fill="none" />
					</svg>
				)}
			</div>
		</>
	);
};
