import {FC} from "react";
import styles from "./cartItem.module.scss";
import {CardItemProps} from "./cartItem.props";
import {ReactComponent as PlusItem} from "../../assets/plusicon.svg";
import {ReactComponent as MinusItem} from "../../assets/minus.svg";
import {useDispatch} from "react-redux";
import {addItem, minusItem, removeItem} from "../../redux/slices/cartSlice/cartSlice.ts";
import clsx from "clsx";

export const CardItem: FC<CardItemProps> = ({
                                                id,
                                                title,
                                                type,
                                                size,
                                                price,
                                                count,
                                                imageUrl,
                                            }: CardItemProps): JSX.Element => {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(
            addItem({
                id
            })
        );
    };

    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    const onClickRemove = () => {
        if (window.confirm("Подтвердить удаление товара")) {
            dispatch(removeItem(id));
        }
    };

    return (
        <>
            <li className={styles.cartItem}>
                <div className={styles.cartItemBlock}>
                    <img
                        src={imageUrl}
                        alt={title}
                        className={styles.cartItemBlockImg}
                    />
                    <span>
						<h3 className={styles.cartItemBlockTitle}>{title}</h3>
						<p className={styles.cartItemBlockDescr}>
							{type}, {size} см.
						</p>
					</span>
                </div>
                <div className={styles.cartItemCounter}>
					<span>
						<button
                            className={clsx({[styles.disableBtnMinus]: count === 1})}
                            disabled={count === 1}
                            onClick={onClickMinus}>
							<MinusItem></MinusItem>
						</button>
                        {count}
                        <button onClick={onClickPlus}>
							<PlusItem></PlusItem>
						</button>
					</span>
                    <p className={styles.cartItemPrice}>{price * count} ₽</p>
                    <button
                        onClick={onClickRemove}
                        className={styles.cartItemPriceClose}
                    >
                        <PlusItem></PlusItem>
                    </button>
                </div>
            </li>
        </>
    );
};
