import { FC, useState } from "react";
import styles from "./Categories.module.scss";
import { ListItems } from "../ui/listItems/ListItems";
import { CategoriesProps } from "./Categories.props";
import { ulArray } from "../../helpers/categoriesUlArray";


export const Categories: FC<CategoriesProps> = ({
	value,
	onChangeCategory,
	...props
}: CategoriesProps): JSX.Element => {

	return (
		<ul className={styles.listContainer}>
			{ulArray.map((item: any, index) => (
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
