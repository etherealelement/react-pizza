import { FC } from "react";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";
import { Link } from "react-router-dom";
import { Search } from "../search/Search";

export const Header: FC<HeaderProps> = ({
	children,
	subtitle,
	totalPrice,
	totalProduct,
	...props
}: HeaderProps): JSX.Element => {
	return (
		<header className={styles.header} {...props}>
			<Link to="/">
				<div className={styles.wrapper}>
					<span>
						<Logo></Logo>
					</span>
					<div className={styles.container}>
						<h1 className={styles.title}>{children}</h1>
						<p className={styles.sub}>{subtitle}</p>
					</div>
				</div>
			</Link>
			<Search>Поиск пиццы...</Search>
			<Link to="/cart">
				<div className={styles.col2}>
					<button className={styles.button}>
						<span className={styles.totalPrice}>
							{totalPrice} ₽
						</span>
						<span className={styles.totalProduct}>
							{" "}
							<CartIcon></CartIcon>
							{totalProduct}
						</span>
					</button>
				</div>
			</Link>
		</header>
	);
};
