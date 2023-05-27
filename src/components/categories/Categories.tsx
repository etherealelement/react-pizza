import { FC, useState } from "react";
import styles from "./Categories.module.scss";
import { ListItems } from "../ui/listItems/ListItems";

interface IulArray {
	name: string;
	state: string;
	id: number;
}

export const Categories: FC = (): JSX.Element => {
	const [activeIndex, setIndex] = useState(0);

	const setCategory = (id: number) => {
		setIndex(id);
	};

	const ulArray: IulArray[] = [
		{
			name: "Все",
			state: "active",
			id: 1,
		},
		{
			name: "Мясные",
			state: "default",
			id: 2,
		},
		{
			name: "Вегетарианская",
			state: "default",
			id: 3,
		},
		{
			name: "Гриль",
			state: "default",
			id: 4,
		},
		{
			name: "Острые",
			state: "default",
			id: 5,
		},
		{
			name: "Закрытые",
			state: "default",
			id: 6,
		},
	];
	return (
		<ul className={styles.listContainer}>
			{ulArray.map((item: any) => (
				<ListItems key={item.id} 
                onClick={()=> setCategory(item.id)}
                state={item.id}
                activeId={activeIndex} 
                >
					{item.name}
				</ListItems>
			))}
		</ul>
	);
};
