import { useParams } from "react-router-dom";
import { iceData } from "../../data/iceCreamData";
import SizeSelector from "../../components/SizeSelector/SizeSelector";
import styles from "./IceCreamDetail.module.css";

function IceCreamDetail() {
  const { id } = useParams();

  const item = iceData.find((ice) => ice.id === id);

  return (
    <div>
        <section className={styles.container}>
          <div className={styles.flex_box}>
            <div className={styles.img_box}
              style={{ backgroundColor: item.color }}
            >
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.info_box}>
              <div className={styles.txt_box}>
                <p className={styles.categori}>ICECREAM</p>
                <p className={styles.eng_title}>{item.engTitle}</p>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.subtitle}>{item.desc}</p>
              </div>
            </div>
          </div>
          <div className={styles.detail_product}>
            <ul className={styles.list}>
              <li className={styles.label}>영양정보</li>
              <li>
                <p>1회 제공량</p>
                <span>115 g</span>
              </li>
              <li>
                <p>열량(kcal)</p>
                <span>{item.kcal}</span>
              </li>
              <li>
                <p>당류(g)</p>
                <span>{item.sugar}</span>
              </li>
              <li>
                <p>단백질(g)</p>
                <span>{item.protein}</span>
              </li>
              <li>
                <p>포화지방(g)</p>
                <span>{item.sfas}</span>
              </li>
              <li>
                <p>나트륨(mg)</p>
                <span>{item.na}</span>
              </li>
              <li>
                <p>알레르기 성분</p>
                <span>{item.allergy}</span>
              </li>
            </ul>
            <div className={styles.detail_img_box}>
              <img src={item.imgDetail} alt={item.title}/>
            </div>
          <SizeSelector/>
          </div>
        </section>
    </div>
  );
}

export default IceCreamDetail;