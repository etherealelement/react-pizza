import { FC, useState } from "react";
import styles from "./Categories.module.scss";
import { ListItems } from "../ui/listItems/ListItems";

interface IulArray {
	name: string;
	state: string;
	id: number;
}

const ulArray: IulArray[] = [
	{
		name: "Все",
		state: "active",
		id: 0,
	},
	{
		name: "Мясные",
		state: "default",
		id: 1,
	},
	{
		name: "Вегетарианская",
		state: "default",
		id: 2,
	},
	{
		name: "Гриль",
		state: "default",
		id: 3,
	},
	{
		name: "Острые",
		state: "default",
		id: 4,
	},
	{
		name: "Закрытые",
		state: "default",
		id: 5,
	},
];

export const Categories: FC = (): JSX.Element => {
	const [active, setActive] = useState(0);

	return (
		<ul className={styles.listContainer}>
			{ulArray.map((item: any, index) => (
				<ListItems
					onClick={() => setActive(index)}
					key={item.id}
					activeId={index}
					index={active}
					state = {item.state}
				>
					{item.name}
				</ListItems>
			))}
		</ul>
	);
};
