import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from "./Button.module.scss";


export const Button: FC<ButtonProps> = ({variant,text, ...props}): JSX.Element => {
	return <>
	<button className={styles.Button}>
	{variant}
	</button>
	</>;
};