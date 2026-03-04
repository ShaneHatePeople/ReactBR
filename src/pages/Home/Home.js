import styles from "./Home.module.css";
import CategoriBar from "../../components/categori/categori";

function Home() {
    return (
        <section className={styles.monthly}>
            <CategoriBar />

            {/* 상단 타이틀 */}
            <h1 className={styles.title}>8월 이달의 맛</h1>

            {/* 제품 소개 + 메인 비주얼 박스 */}
            <div className={styles.heroBox}>
                <div className={styles.heroText}>
                    <p className={styles.enName}>blue Banana Brulee</p>
                    <h2 className={styles.krName}>블루 바나나 브륄레</h2>
                    <p className={styles.desc}>
                        달콤한 바나나&amp;커스터드 아이스크림에 바삭한 브륄레 크런치 바나나 큐브 케이크 쏙쏙!
                    </p>
                    <span className={styles.divider} />
                </div>

                {/* 메인 비주얼 이미지 */}
                <div className={styles.mainVisual}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/monthly.png"}
                        alt="블루 바나나 브륄레 메인 비주얼"
                    />
                </div>
            </div>

            {/* 영상 영역 */}
            <section className={styles.videoSection}>
                <div className={styles.videoInner}>
                    <iframe
                        src="https://www.youtube.com/embed/Jumfgf-lr7M"
                        title="블루 바나나 브륄레 프로모션 영상"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* 이달의 신제품 영역 */}
            <section className={styles.selectSection}>
                <h3 className={styles.selectTitle}>이달의 신제품</h3>
                <div className={styles.selectList}>
                    <article className={styles.selectCard}>
                        <div className={styles.selectThumb}>
                            <img
                                src={process.env.PUBLIC_URL + "/images/monthly_menu01.png"}
                                alt="블루 바나나 브륄레"
                            />
                        </div>
                        <div className={styles.selectMeta}>
                            <p className={styles.selectName}>블루 바나나 브륄레</p>
                        </div>
                    </article>

                    <article className={styles.selectCard}>
                        <div className={styles.selectThumb}>
                            <img
                                src={process.env.PUBLIC_URL + "/images/monthly_menu02.png"}
                                alt="블루 바나나 스틱바"
                            />
                        </div>
                        <div className={styles.selectMeta}>
                            <p className={styles.selectName}>블루 바나나 스틱바</p>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    );
}

export default Home;