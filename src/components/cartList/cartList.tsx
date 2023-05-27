import { FC, useState } from "react";
import styles from "./cartList.module.scss";
import { ListItems } from "../ui/listItems/ListItems";
import { CartItem } from "../cartItem/CartItem";

import Item1 from "../../assets/cartItems/cart-1.png";
import Item2 from "../../assets/cartItems/cart-2.png";
import Item3 from "../../assets/cartItems/cart-3.png";
import Item4 from "../../assets/cartItems/cart-4.png";
import Item5 from "../../assets/cartItems/cart-5.png";
import Item6 from "../../assets/cartItems/cart-6.png";
import Item7 from "../../assets/cartItems/cart-7.png";
import Item8 from "../../assets/cartItems/cart-8.png";

const productArray = [
	{
		id: 0,
		image: Item1,
		title: "Чизбургер-пицца",
		cartParamsTitle: ["тонкое", "традиционное"],
		cartParamsSize: [26, 30, 40],
		price: 395,
	},
	{
		id: 1,
		image: Item2,
		title: "Сырная",
		cartParamsTitle: ["тонкое", "традиционное"],
		cartParamsSize: [26],
		price: 450,
	},
	{
		id: 2,
		image: Item3,
		title: "Креветки по-азиатски",
		cartParamsTitle: ["тонкое", "традиционное"],
		cartParamsSize: [30],
		price: 450,
	},
	{
		id: 3,
		image: Item4,
		title: "Сырный цыпленок",
		cartParamsTitle: ["тонкое", "традиционное"],
		cartParamsSize: [30, 30, 40],
		price: 385,
	},
	{
		id: 4,
		image: Item5,
		title: "Чизбургер-пицца",
		cartParamsTitle: ["тонкое", "традиционное"],
		cartParamsSize: [30, 30, 40],
		price: 385,
	},
];

export const CartList: FC = (): JSX.Element => {
	
	return (
		<div className={styles.gridInner}>
			{productArray.map((item: any) => {
				return (
					<CartItem
						
						cartSize={item.cartParamsSize}
						cartDescr={item.cartParamsTitle}
						image={item.image}
						price={item.price}
						key={item.id}
						itemId={item.id}
					>
						{item.title}
					</CartItem>
				);
			})}
		</div>
	);
};
