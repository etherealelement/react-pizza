import {FC, useRef, useCallback, useState, ChangeEvent} from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/searchIcons/172546_search_icon.svg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import {setSearchValue} from "../../redux/filter/slice.ts";

export const Search: FC<SearchProps> = ({
	children,
}: SearchProps): JSX.Element => {
	const dispatch = useDispatch();
	const [value, setValue] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	const onClickClear = () => {
		dispatch(setSearchValue(''))
		setValue('');
			inputRef.current?.focus();
	};

	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str))
		}, 1000), [],
	)
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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
