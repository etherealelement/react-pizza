import { FC, useState } from "react";
import styles from "./Sort.module.scss";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-top.svg";

export const Sort: FC = (): JSX.Element => {
	const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
	const [active, setActive] = useState(0);
	const sortList = ["популярности", "цене", "алфавиту"];
	const sortName = sortList[active];

	const onClickListItem = (index: number) => {
		setVisiblePopup(false);
		setActive(index);
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
						{sortName}
					</span>
				</div>

				{visiblePopup && (
					<ul className={styles.popup}>
						{sortList.map((item: any, index: any) => (
							<li
								key={index}
								onClick={() => onClickListItem(index)}
								className={
									active === index ? styles.active : ""
								}
							>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
