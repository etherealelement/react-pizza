import { FC } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/searchIcons/172546_search_icon.svg";
export const Search: FC<SearchProps> = ({
	children,
    searchValue,
    setsearchValue,
	...props
}: SearchProps): JSX.Element => {
	return (
		<>
			<div className={styles.root}>
				<input
                    onChange={(event)=>console.log(event)}
					placeholder={children}
					type="text"
					className={styles.rootInput}
				/>
				<SearchIcon className={styles.rootInputIcon}></SearchIcon>
			</div>
		</>
	);
};
