import { FC, useState } from "react";
import styles from "./Sort.module.scss";
import {ReactComponent as ArrowIcon} from "../../assets/arrow-top.svg";

export const Sort: FC = (): JSX.Element => {
    const [visiblePopup, setVisiblePopup] = useState<boolean>(false);

	return (
		<>
			<div className={styles.wrapper}>
            <ArrowIcon></ArrowIcon>
            <b className={styles.b}>
                Сортировка по:
            </b>
            <span
            onClick={() => setVisiblePopup(!visiblePopup)} 
            className={styles.span}>
                Популярности
            </span>
            
            {visiblePopup && <ul className={styles.popup}>
                <li>популярности</li>
                <li>по цене</li>
                <li>по алфавиту</li>
            </ul>}
            </div>
		</>
	);
};
