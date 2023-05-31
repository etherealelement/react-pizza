import { FC, useState } from "react";
import styles from "./Sort.module.scss";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-top.svg";
import { SortProps } from "./Sort.props";

export const Sort: FC<SortProps> = ({
	value,
	onChangeSort,
	...props
}: SortProps): JSX.Element => {
	const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
	const sortList = [
		{ name: "популярности (DESC)", sortProperty: "rating" },
		{ name: "популярности (ASC)", sortProperty: "-rating" },
		{ name: "цене(DESC)", sortProperty: "price" },
		{ name: "цене(ASC)", sortProperty: "-price" },
		{ name: "алфавиту(DESC)", sortProperty: "title" },
		{ name: "алфавиту(ASK)", sortProperty: "-title" },
	];

	const onClickListItem = (i: number) => {
		onChangeSort(i);
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
						{value?.name}
					</span>
				</div>

				{visiblePopup && (
					<ul className={styles.popup}>
						{sortList.map((obj: any, index: any) => (
							<li
								key={index}
								onClick={() => onClickListItem(obj)}
								className={
									value?.sortProperty === obj.sortProperty
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
