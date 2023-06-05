import { FC, useContext, useRef, useCallback, useState } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/searchIcons/172546_search_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/searchIcons/352270_close_icon.svg";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";


const testDebounce = debounce(() => {
	console.log("hello");
}, 500);

export const Search: FC<SearchProps> = ({
	children,
	...props
}: SearchProps): JSX.Element => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	const { setSearchValue } = useContext(SearchContext);
	const inputRef = useRef();

	const onClickClear = () => {
		dispatch(setSearchValue(value))
		setValue("");
		inputRef.current.focus();
	};

	const updateSearchValue = useCallback(
		debounce((str) => {
			setSearchValue(str);	
		}, 1000), [],
	)
	const onChangeInput = event => { 
		setValue(event.target.value);
		updateSearchValue(event.target.value);
	}


	return (
		<>
			<div className={styles.root}>
				<input
					ref={inputRef}
					value={value}
					onChange={onChangeInput}
					placeholder={children}
					type="text"
					className={styles.rootInput}
				/>
				<SearchIcon className={styles.rootInputIcon}></SearchIcon>
				{value.length > 0 && (
					<svg
						onClick={onClickClear}
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
