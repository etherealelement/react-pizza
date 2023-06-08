import {FC, MouseEvent, useEffect, useRef, useState} from "react";
import styles from "./Sort.module.scss";
import {ReactComponent as ArrowIcon} from "../../assets/arrow-top.svg";
import {SortListProps, SortProps} from "./Sort.props";
import {useDispatch, useSelector} from "react-redux";
import {selectSort, setSort} from "../../redux/slices/filterSlice/filterSlice.ts";
import {SortPropertyEnum} from "../../redux/slices/filterSlice/filterSlice.interfaces.ts";


// eslint-disable-next-line react-refresh/only-export-components
export const sortList: SortListProps[] = [
	{ name: "популярности (DESC)", sortProperty: SortPropertyEnum.RATING_DESC },
	{ name: "популярности (ASC)", sortProperty: SortPropertyEnum.RATING_ASC },
	{ name: "цене(DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
	{ name: "цене(ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
	{ name: "алфавиту(DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
	{ name: "алфавиту(ASK)", sortProperty: SortPropertyEnum.TITLE_ASC},
];

type PopupClick = MouseEvent & {
	composedPath: () => Node[];
}


export const Sort: FC<SortProps> = (): JSX.Element => {
	const dispatch = useDispatch();
	const sort = useSelector(selectSort);
	const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
	const sortRef= useRef<HTMLDivElement>(null);
	const onClickListItem = (i: SortListProps) => {
		dispatch(setSort(i));
		setVisiblePopup(false);
	};

	useEffect(() => {
		const handleClickOutside = (e: any):void => {
			const _event:PopupClick = e as PopupClick;

			if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
				setVisiblePopup(false)
			}
		}


		document.body.addEventListener("click",handleClickOutside);
		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		}
	}, []);

	return (
		<>
			<div ref={sortRef} className={styles.wrapper}>
				<div className={styles.sortInner}>
					<ArrowIcon></ArrowIcon>
					<b className={styles.b}>Сортировка по:</b>
				</div>
				<div className={styles.sortContainer}>
					<span
						onClick={() => setVisiblePopup(!visiblePopup)}
						className={styles.span}
					>
						{sort?.name}
					</span>
				</div>

				{visiblePopup && (
					<ul className={styles.popup}>
						{sortList.map((obj: SortListProps, index: number) => (
							<li
								key={index}
								onClick={() => onClickListItem(obj)}
								className={
									sort?.sortProperty === obj.sortProperty ? styles.active : ""
								}
							>
								{obj.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
