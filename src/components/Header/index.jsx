import taskPlus from "../../Assets/icons/task-plus.svg";
import moon from "../../Assets/icons/moon.svg";
import userMenu from "../../Assets/icons/user-menu.svg";
import avatar from "../../Assets/img/header__avatar.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <button className={styles.taskBtn}>
        <img src={taskPlus} alt="new task" />
        Новая задача
      </button>
      <img className={styles.moonIcon} src={moon} alt="moon " />
      <div className={styles.userInfo}>
        <p>Хорошего дня, username</p>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <button className={styles.userMenu}>
          <img src={userMenu} alt="user menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
