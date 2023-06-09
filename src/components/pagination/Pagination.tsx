import { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { PaginationProps } from "./Pagination.props";

export const Pagination: FC<PaginationProps> = ({ value, onChangePage }: PaginationProps) => {
	return (
		<>
			<ReactPaginate
				className={styles.Pagination}
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={(event) => onChangePage(event.selected + 1)}
				pageRangeDisplayed={3}
				pageCount={2}
				forcePage={value - 1}
				renderOnZeroPageCount={null}
			></ReactPaginate>
		</>
	);
};
