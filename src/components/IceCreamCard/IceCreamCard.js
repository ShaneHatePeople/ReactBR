import { Link } from "react-router-dom";
import styles from "./IceCreamCard.module.css";

function IceCreamCard(props) {
  return (
    <Link to={`/icecream/${props.id}`} className={styles.card}>
      <div className={styles.img_box} style={{ "--hover-bg": props.color }}>
        <img src={props.image} alt={props.title} className={styles.image} />
        <p className={styles.tag}>{props.tag}</p>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
    </Link>
  );
}

export default IceCreamCard;