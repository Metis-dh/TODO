import edit from "../../Assets/icons/edit.svg";
import trash from "../../Assets/icons/trash.svg";

import styles from "./CompletedTasks.module.scss";

const CompletedTasks = () => {
  return (
    <>
      <h3>Завершенные задачи</h3>
      <div className={styles.taskListItems}>
        <div className={styles.taskListItem}>
          <p>Полить цветы</p>
          <div className={styles.taskOptions}>
            <img src={edit} alt="edit" />
            <img src={trash} alt="trash" />
          </div>
        </div>
        <div className={styles.taskListItem}>
          <p>Вызвать сантехника</p>
          <div className={styles.taskOptions}>
            <img src={edit} alt="edit" />
            <img src={trash} alt="trash" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedTasks;
