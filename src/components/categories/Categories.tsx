import { FC, useState } from "react";
import styles from "./Categories.module.scss";

interface IulArray {
	name: string;
	state: string;
	id: number;
}

export const Categories: FC = (): JSX.Element => {
	const [activeIndex, setIndex] = useState(0);

	const onClickCategory = (index: number) => {
		setIndex(index);
	};

	return (
		<>
			<ul className={styles.listContainer}>
				<li onClick={()=> onClickCategory(0)} className={activeIndex === 0 ? styles.ListItemActive : ""}>Все</li>
				<li onClick={()=> onClickCategory(1)} className={activeIndex === 1 ? styles.ListItemActive : ""}>Мясные</li>
				<li onClick={()=> onClickCategory(2)} className={activeIndex === 2 ? styles.ListItemActive : ""}>Вегетарианская</li>
				<li onClick={()=> onClickCategory(3)} className={activeIndex === 3 ? styles.ListItemActive : ""}>Гриль</li>
				<li onClick={()=> onClickCategory(4)} className={activeIndex === 4 ? styles.ListItemActive : ""}>Острые</li>
				<li onClick={()=> onClickCategory(5)} className={activeIndex === 5 ? styles.ListItemActive : ""}>Закрытые</li>
			</ul>
		</>
	);
};
