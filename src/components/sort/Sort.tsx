import { FC, useState } from "react";
import styles from "./Sort.module.scss";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-top.svg";
import { SortProps } from "./Sort.props";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";



export const sortList = [
	{ name: "популярности (DESC)", sortProperty: "rating" },
	{ name: "популярности (ASC)", sortProperty: "-rating" },
	{ name: "цене(DESC)", sortProperty: "price" },
	{ name: "цене(ASC)", sortProperty: "-price" },
	{ name: "алфавиту(DESC)", sortProperty: "title" },
	{ name: "алфавиту(ASK)", sortProperty: "-title" },
];



export const Sort: FC<SortProps> = ({
	...props
}: SortProps): JSX.Element => {
	const dispatch = useDispatch();
	const sort = useSelector(state => state.filter.sort)
	const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
	const onClickListItem = (i: number) => {
		dispatch(setSort(i));
		setVisiblePopup(false);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.sortInner}>
					<ArrowIcon></ArrowIcon>
					<b className={styles.b}>Сортировка по:</b>
				</div>
				<div className={styles.sortContainer}>
					<span
						onClick={() => setVisiblePopup(!visiblePopup)}
						className={styles.span}
					>
						{sort?.name}
					</span>
				</div>

				{visiblePopup && (
					<ul className={styles.popup}>
						{sortList.map((obj: any, index: any) => (
							<li
								key={index}
								onClick={() => onClickListItem(obj)}
								className={
									sort?.sortProperty === obj.sortProperty
										? styles.active
										: ""
								}
							>
								{obj.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
