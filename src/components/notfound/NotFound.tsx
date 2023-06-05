import { FC } from "react";
import styles from "./NotFount.module.scss";

export const NotFound: FC = (): JSX.Element => {
	return (
		<div className={styles.Wrapper}>
			<div className={styles.errorBlock}>
			<span className={styles.errorBlockSpan}>😕</span>

			<h2 className={styles.errorBlockTittle}>Ничего не найдено</h2>
		</div>
		</div>
	);
};
