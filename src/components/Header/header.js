import { menuItems } from "../../data/menuData";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";

function Header() {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <nav className={styles.gnb}>
                    <div className={styles.logo}>
                        <img src={process.env.PUBLIC_URL + '/images/logo_white.png'} alt="" />
                    </div>
                    <ul className={styles.header_gnb}>
                        {menuItems.map((menu, index) => (
                            <li
                                key={menu.name}
                                onMouseEnter={() => setHoveredMenu(index)}
                                onMouseLeave={() => setHoveredMenu(null)}
                                className={`${styles.menu_item} ${hoveredMenu === index ? styles.hover : ""}`}
                            >
                                <Link to={menu.path}>{menu.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {hoveredMenu !== null && menuItems[hoveredMenu].sub && (
                <div
                    className={styles.sub_menu}
                    onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                    onMouseLeave={() => setHoveredMenu(null)}
                >
                    <ul className={styles.categori}>
                        {menuItems[hoveredMenu].sub.map((item) => (
                            <li key={item.name}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;