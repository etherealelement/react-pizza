import {FC, useEffect, useState} from "react";
import styles from "./FullPizza.module.scss";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {FullPizzaProps} from "./FullPizza.props.ts";



export const FullPizza: FC = (): JSX.Element => {
    const {id} = useParams();
    const [data, setData] = useState<FullPizzaProps>();
    const navigate = useNavigate();


    
    useEffect(() => {
        const loadData = async (): Promise<void> => {
            try {
                const {data} = await axios.get(
                    "https://64732640d784bccb4a3c4d81.mockapi.io/items/" + id
                );
                setData(data);
            } catch (error) {
                navigate("/")
                alert(error);
            }
        };
        loadData();
    }, []);

    
    if (!data) {
        return <>"Загрузка..."</>;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <h2 className={styles.wrapTitle}>{data.title}</h2>
                <img
                    src={data.imageUrl}
                    alt={data.title}
                    className={styles.containerImage}
                />
            </div>
            <div className={styles.containerDescr}>
                <h2>Описание: </h2>
                <p>
                    Пастрами из мраморной говядины, сладкий перец, томаты, красный лук, чеснок, соус ткемали, моцарелла, фирменный томатный соус
                </p>
                <h4>Цена: {data.price}p</h4>
            </div>
        </div>
    );
};
