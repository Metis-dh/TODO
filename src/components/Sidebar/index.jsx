import logo from "../../Assets/icons/logo.svg";
import plus from "../../Assets/icons/plus.svg";
import logOut from "../../Assets/icons/log-out.svg";
import home from "../../Assets/icons/home.svg";
import users from "../../Assets/icons/users.svg";
import briefcase from "../../Assets/icons/briefcase.svg";
import sport from "../../Assets/icons/sport.svg";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className="logoIcon" />
        <h1 className={styles.logoText}>Tasks Book</h1>
      </div>
      <div className={styles.categories}>
        <h2>Категории</h2>
        <div className={styles.categoriesList}>
          <ul>
            <li>
              <img src={home} alt="home" />
              Дом
            </li>
            <li>
              <img src={users} alt="users" />
              Семья
            </li>
            <li>
              <img src={briefcase} alt="briefcase" />
              Работа
            </li>
            <li>
              <img src={sport} alt="sport" />
              Спорт
            </li>
          </ul>
          <button className={styles.plusBtn}>
            <img src={plus} alt="plus" />
            Добавить
          </button>
        </div>
      </div>
      <button className={styles.logOutBtn}>
        <img src={logOut} alt="log-out" />
        Выйти
      </button>
    </div>
  );
};

export default Sidebar;
