import {FC, useState} from "react";
import styles from "./CardItem.module.scss";
import {ICartItemProps, PizzaBlockProps} from "./CardItem.props";
import {Button} from "../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../redux/cart/slice.ts";
import {selectCartItemById} from "../../redux/cart/selectors.ts";
import {Link} from "react-router-dom";


const typeNames = ['тонкое', 'традиционное'];


export const CartItem: FC<PizzaBlockProps> = ({
                                                id,
                                                title,
                                                price,
                                                imageUrl,
                                                sizes,
                                                types,
                                            }: PizzaBlockProps): JSX.Element => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item:ICartItemProps  = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
            count: 0,
        };
        dispatch(addItem(item));
    }

    return (
        <>
            <div className={styles.cartItem}>
                <div className={styles.cartItemWrapper}>
                    <Link key={id} to={`/pizza/${id}`}>
                        <img src={imageUrl} className={styles.cartItemImage} alt="cart-image"/>
                    </Link>
                        <h2 className={styles.cartItemTitle}>{title}</h2>
                    <div className={styles.cartItemSelector}>
                        <ul>
                            {types.map((typeId) => (
                                <li
                                    onClick={() => setActiveType(typeId)}
                                    key={typeId}
                                    className={
                                        activeType === typeId
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    {typeNames[typeId]}
                                </li>

                            ))}
                        </ul>
                        <ul>
                            {sizes.map((item, index) => (
                                <li
                                    onClick={() => setActiveSize(index)}
                                    className={
                                        activeSize === index
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
                        <Button  addedCount={addedCount} cartItem={title} onClickAdd={onClickAdd}
                                isPlus={true} variant={"default"}>
                            Добавить
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
