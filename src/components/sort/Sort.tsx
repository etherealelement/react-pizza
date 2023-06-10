import {FC, MouseEvent, useEffect, useRef, useState} from "react";
import styles from "./Sort.module.scss";
import {ReactComponent as ArrowIcon} from "../../assets/arrow-top.svg";
import {SortListProps, SortValueProps} from "./Sort.props";
import {useDispatch} from "react-redux";
import {setSort} from "../../redux/filter/slice.ts";
import {SortPropertyEnum} from "../../redux/filter/types.ts";


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


export const Sort: FC<SortValueProps> = ({value}:SortValueProps): JSX.Element => {
	const dispatch = useDispatch();
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
						{value.name}
					</span>
				</div>

				{visiblePopup && (
					<ul className={styles.popup}>
						{sortList.map((obj: SortListProps, index: number) => (
							<li
								key={index}
								onClick={() => onClickListItem(obj)}
								className={
									value.sortProperty === obj.sortProperty ? styles.active : ""
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
