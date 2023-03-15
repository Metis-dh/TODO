import React from "react";

import edit from "../../Assets/icons/edit.svg";
import trash from "../../Assets/icons/trash.svg";

import styles from "./Task.module.scss";

const Task = ({ text, completed }) => {
  return (
    <div className={styles.taskListItem}>
      <div className={styles.taskTitle}>
        {!completed && <input type="checkbox" />}
        <p>{text}</p>
      </div>
      <div className={styles.taskOptions}>
        <img src={edit} alt="edit" />
        <img src={trash} alt="trash" />
      </div>
    </div>
    //   <div className={styles.taskListItem}>
    //     <div className={styles.taskTitle}>
    //       <input type="checkbox" />
    //       <p>Устранить засор в раковине</p>
    //     </div>
    //     <div className={styles.taskOptions}>
    //       <img src={edit} alt="edit" />
    //       <img src={trash} alt="trash" />
    //     </div>
    //   </div>
    //   <div className={styles.taskListItem}>
    //     <div className={styles.taskTitle}>
    //       <input type="checkbox" />
    //       <p>Стирка белого белья</p>
    //     </div>
    //     <div className={styles.taskOptions}>
    //       <img src={edit} alt="edit" />
    //       <img src={trash} alt="trash" />
    //     </div>
    //   </div>
    //   <div className={styles.taskListItem}>
    //     <div className={styles.taskTitle}>
    //       <input type="checkbox" />
    //       <p>Разморозить холодильник</p>
    //     </div>
    //     <div className={styles.taskOptions}>
    //       <img src={edit} alt="edit" />
    //       <img src={trash} alt="trash" />
    //     </div>
    //   </div>
  );
};

export default Task;
