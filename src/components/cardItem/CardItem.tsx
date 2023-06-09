import {FC, useState} from "react";
import styles from "./CardItem.module.scss";
import {CartItemProps} from "./CardItem.props";
import {Button} from "../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../redux/slices/cartSlice/cartSlice.ts";
import {selectCartItemById} from "../../redux/slices/cartSlice/cartSlice.ts";
import {OnClickItemProps} from "./CardItem.props";
import {Link} from "react-router-dom";

const cartType: string[] = ["тонкое", "традиционное"]


export const CartItem: FC<CartItemProps> = ({
                                                itemId,
                                                children,
                                                cartDescr,
                                                image,
                                                cartSize,
                                                price,
                                            }: CartItemProps): JSX.Element => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(itemId));
    const [activeType, setType] = useState(0);
    const [activeBlock, setActive] = useState(0);
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item: OnClickItemProps = {
            itemId,
            children,
            price,
            image,
            type: cartType[activeType],
            size: activeBlock,
        };
        dispatch(addItem(item));
    }

    return (
        <>
            <div className={styles.cartItem}>
                <div className={styles.cartItemWrapper}>
                    <Link key={itemId} to={`/pizza/${itemId}`}>
                        <img src={image} className={styles.cartItemImage} alt="cart-image"/>
                    </Link>
                    <Link key={itemId} to={`/pizza/${itemId}`}>
                        <h2 className={styles.cartItemTitle}>{children}</h2>
                    </Link>
                    <div className={styles.cartItemSelector}>
                        <ul>
                            {cartDescr.map((item: any, index) => (
                                <li
                                    onClick={() => setType(index)}
                                    key={index}
                                    className={
                                        activeType === index
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    {cartType[item]}
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {cartSize.map((item, index) => (
                                <li
                                    onClick={() => setActive(index)}
                                    className={
                                        activeBlock === index
                                            ? styles.active
                                            : ""
                                    }
                                    key={index}
                                >
                                    {item} см.
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cartItemPriceBLock}>
                        <b className={styles.cartItemPrice}>от {price} ₽</b>
                        <Button key={itemId} addedCount={addedCount} cartItem={cartItem} onClickAdd={() => onClickAdd()}
                                isPlus={true} variant={"default"}>
                            Добавить
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
