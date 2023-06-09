import {FC, useEffect, useCallback} from "react";
import styles from "./cardList.module.scss";
import {CartItem} from "../cardItem/CardItem";
import {SkeletonLoader} from "../../helpers/skeleton";
import {CardListProps} from "./cardList.props";
import {selectFilter} from "../../redux/filter/selectors.ts";
import {setCategoryId} from "../../redux/filter/slice.ts";
import {NotFound} from "../notfound/NotFound";
import {useSelector} from "react-redux";
import {getPizzas} from "../../redux/pizza/asyncActions.ts";
import {Categories} from "../categories/Categories.tsx";
import {selectPizzaData} from "../../redux/pizza/selectors.ts";
import {Sort} from "../sort/Sort.tsx";
import {useAppDispatch} from "../../redux/store.ts";


export const CartList: FC<CardListProps> = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const {items, status} = useSelector(selectPizzaData);
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

    const onChangeCategory = useCallback((idx: number) => {
        dispatch(setCategoryId(idx))
    }, [])


    // fetchPizzas
    const fetchPizzas = () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? String(categoryId) : '';
        const search = searchValue;
        console.log(search)
        dispatch(
            getPizzas({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
            }),
        );

    };

    // Если изменили параметры и был первый рендер
    useEffect(() => {
        fetchPizzas();
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    // filtredPizzas
    const pizzas = items.map((obj: any) => <CartItem
        key={obj.id}
        id={obj.id}
        title={obj.title}
        types={obj.types}
        imageUrl={obj.imageUrl}
        sizes={obj.sizes}
        price={obj.price}
        rating={obj.rating}
    />)
    const skeletonLoader = [...new Array(9)].map((_, index) => (
        <SkeletonLoader
            key={index}
        ></SkeletonLoader>
    ));

    return (
        <>
            <div className={styles.container}>
                <Categories
                    value={categoryId}
                    onChangeCategory={onChangeCategory}
                ></Categories>
                <Sort value={sort}></Sort>
            </div>
            {pizzas.length === 0 ? (
                <NotFound></NotFound>
            ) : (
                <div className={styles.gridInner}>
                    {status === "loading" ? skeletonLoader : pizzas}
                </div>
            )}
        </>
    );
};
