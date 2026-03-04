import { menuItems } from "../../data/menuData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import styles from "./header.module.css";

function Header() {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <nav className={styles.gnb}>
                    <div className={styles.logo}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/logo_white.png"}
                            alt="Baskin Robbins 로고"
                        />
                    </div>

                    <ul className={styles.header_gnb}>
                        {menuItems.map((menu, index) => (
                            <li
                                key={menu.name}
                                onMouseEnter={() => setHoveredMenu(index)}
                                onMouseLeave={() => setHoveredMenu(null)}
                                className={`${styles.menu_item} ${
                                    hoveredMenu === index ? styles.hover : ""
                                }`}
                            >
                                <Link to={menu.path}>{menu.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.util}>
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder=""
                            />
                            <FiSearch className={styles.searchIcon} />
                        </div>
                        <button type="button" className={styles.userButton}>
                            <FiUser className={styles.userIcon} />
                        </button>
                    </div>
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