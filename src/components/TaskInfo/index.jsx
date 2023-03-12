import styles from "./TaskInfo.module.scss";

const TaskInfo = () => {
  return (
    <div className={styles.taskInfo}>
      <h3>Успехи за неделю</h3>
      <div className={styles.taskCounter}>
        <div className={styles.itemCounter}>
          <p>Создано</p>
          <div className={styles.taskCount}>
            <h5>113</h5>
            <p>задач</p>
          </div>
        </div>
        <div className={styles.itemCounter}>
          <p>Завершено</p>
          <div className={styles.taskCount}>
            <h5>97</h5>
            <p>задач</p>
          </div>
        </div>
        <div className={styles.itemCounter}>
          <p>Удалено</p>
          <div className={styles.taskCount}>
            <h5>14</h5>
            <p>задач</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
