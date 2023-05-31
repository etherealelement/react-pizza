import { FC } from "react";
import styles from "./Pagination.module.scss";
import { PaginationProps } from "./Pagination.props";
import { ReactComponent as ArrowLeft } from "../../assets/pagination/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/pagination/arrow-right.svg";

export const Pagination: FC<PaginationProps> = ({
	children,
	...props
}: PaginationProps): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.pagination}>
				<ArrowLeft className={styles.arrowIcon}></ArrowLeft>
				<ul className={styles.paginationList}>
					<li className={styles.paginationListItem}>1</li>
					<li className={styles.paginationListItem}>2</li>
					<li className={styles.paginationListItem}>3</li>
					<li className={styles.paginationListItem}>4</li>
					<li className={styles.paginationListItem}>5</li>
				</ul>
				<ArrowRight className={styles.arrowIcon}></ArrowRight>
			</div>
		</div>
	);
};
