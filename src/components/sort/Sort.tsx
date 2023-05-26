import { FC } from "react";
import styles from "./Sort.module.scss";
import {ReactComponent as ArrowIcon} from "../../assets/arrow-top.svg";

export const Sort: FC = (): JSX.Element => {
	return (
		<>
			<div className={styles.wrapper}>
            <ArrowIcon></ArrowIcon>
            <b className={styles.b}>
                Сортировка по:
            </b>
            <a href="#" className={styles.link}>
                Популярности
            </a>
            
            <ul className={styles.popup}>
                <li>по популярности</li>
                <li>по цене</li>
                <li>по алфавиту</li>
            </ul>
            </div>
		</>
	);
};
