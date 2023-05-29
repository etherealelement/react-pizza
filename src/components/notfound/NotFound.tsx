import { FC } from "react";
import styles from "./NotFount.module.scss";
import { Button } from "../ui/button/Button";
import { Link } from "react-router-dom";

export const NotFound: FC = (): JSX.Element => {
	return (
		<div className={styles.errorBlock}>
			<span className={styles.errorBlockSpan}>😕</span>

			<h2 className={styles.errorBlockTittle}>Ничего не найдено</h2>

			<Link to="/">
				<Button
					isCount={false}
					children={"Вернуться назад"}
					isPlus={false}
					variant={"black"}
				/>
			</Link>
		</div>
	);
};
