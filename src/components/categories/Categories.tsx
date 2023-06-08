import { FC } from "react";
import styles from "./Categories.module.scss";
import { ListItems } from "../ui/listItems/ListItems";
import { CategoriesProps } from "./Categories.props";
import { ulArray } from "../../helpers/categoriesUlArray";


export const Categories: FC<CategoriesProps> = ({
	value,
	onChangeCategory,
}: CategoriesProps): JSX.Element => {
	console.log(ulArray);
	return (
		<ul className={styles.listContainer}>
			{ulArray.map((item: any, index: number) => (
				<ListItems
					onClick={() => onChangeCategory(index)}
					key={item.id}
					activeId={value}
					index={index}
					state={item.state}
				>
					{item.name}
				</ListItems>
			))}
		</ul>
	);
};
