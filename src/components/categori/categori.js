import { menuItems } from "../../data/menuData";
import { NavLink } from "react-router-dom";
import styles from "./categori.module.css";

function CategoriBar() {

    const categori = menuItems[0].sub;
    return (
        <div className={styles.categori_box}>
            <ul className={styles.categori}>
                {categori.map((item) => (
                    <li key={item.name}>
                        <NavLink 
                            to={item.path}
                            className={({isActive }) => 
                                isActive ? styles.isActive : undefined
                            }
                        >   
                        {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriBar;