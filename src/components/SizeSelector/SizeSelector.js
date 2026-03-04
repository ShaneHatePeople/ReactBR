import { sizeData } from '../../data/sizeData';
import styles from './SizeSelector.module.css';

function SizeSelector() {
  return (
    <div className={styles.sizeSelector}>
      <div className={styles.size_box}>
        <h2 className={styles.title}>SELECT SIZE</h2>
        {sizeData.map((section) => (
          <div key={section.category} className={styles.section}>
            <h3 className={styles.category}>{section.category}</h3>
            <ul className={styles.cardList}>
              {section.items.map((item) => (
                <li key={item.name} className={styles.card}>
                  <div className={styles.img_box}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.desc}>{item.desc}</p>
                  <p className={styles.price}>{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={styles.notice}>* 일부 제품에 한해 가격이 상이할 수 있습니다.</p>
    </div>
  );
}

export default SizeSelector;