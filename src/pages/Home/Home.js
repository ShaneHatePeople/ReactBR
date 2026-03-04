import styles from "./Home.module.css";
import CategoriBar from "../../components/categori/categori";

function Home() {

    return (
        <section className={styles.monthly}>
            <CategoriBar/>
            <h1 className={styles.title}>8월 이달의 맛</h1>
            <div className={styles.contents}>
                <img src={process.env.PUBLIC_URL + '/images/monthly.png'} alt="" />
            </div>
        </section>
    );
}

export default Home;