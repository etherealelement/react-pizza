import { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { PaginationProps } from "./Pagination.props";

export const Pagination: FC<PaginationProps> = ({onChangePage}:PaginationProps) => {
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
				renderOnZeroPageCount={null}
			></ReactPaginate>
		</>
	);
};
