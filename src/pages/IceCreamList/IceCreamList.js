import CategoriBar from "../../components/categori/categori";
import styles from "./IceCreamList.module.css"
import IceCreamCard from "../../components/IceCreamCard/IceCreamCard";
import { iceData } from "../../data/iceCreamData";


function IceCreamList() {
    return(
        <section className={styles.icecream}>
            <CategoriBar/>
            <div className={styles.container}>
                <h2 className={styles.title}>Ice Cream</h2>
                <p className={styles.sub_title}>한 입에 물면 달콤하게 사르르 녹는 아이스크림.</p>
                <p className={styles.sub_title}>당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을 거예요.</p>
                <div className={styles.grid}>
                    {iceData.map((item) => ( 
                    <IceCreamCard
                        key={item.id}
                        id={item.id}
                        color={item.color}
                        image={item.image}
                        tag={item.tag}
                        title={item.title}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IceCreamList;