import edit from "../../Assets/icons/edit.svg";
import trash from "../../Assets/icons/trash.svg";

import styles from "./NewTasks.module.scss";

const NewTasks = () => {
  return (
    <>
      <h3>Активные задачи</h3>
      <div className={styles.taskListItems}>
        <div className={styles.taskListItem}>
          <div className={styles.taskTitle}>
            <input type="checkbox" />
            <p>Приготовить вкусный ужин</p>
          </div>
          <div className={styles.taskOptions}>
            <img src={edit} alt="edit" />
            <img src={trash} alt="trash" />
          </div>
        </div>
        <div className={styles.taskListItem}>
          <div className={styles.taskTitle}>
            <input type="checkbox" />
            <p>Устранить засор в раковине</p>
          </div>
          <div className={styles.taskOptions}>
            <img src={edit} alt="edit" />
            <img src={trash} alt="trash" />
          </div>
        </div>
        <div className={styles.taskListItem}>
          <div className={styles.taskTitle}>
            <input type="checkbox" />
            <p>Стирка белого белья</p>
          </div>
          <div className={styles.taskOptions}>
            <img src={edit} alt="edit" />
            <img src={trash} alt="trash" />
          </div>
        </div>
        <div className={styles.taskListItem}>
          <div className={styles.taskTitle}>
            <input type="checkbox" />
            <p>Разморозить холодильник</p>
          </div>
          <div className={styles.taskOptions}>
            <img src={edit} alt="edit" />
            <img src={trash} alt="trash" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTasks;
