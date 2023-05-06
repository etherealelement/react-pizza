import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from "./Button.module.scss";


export const Button: FC<ButtonProps> = ({variant,text, className, children, ...props}): JSX.Element => {
	return <div>Button</div>;
};