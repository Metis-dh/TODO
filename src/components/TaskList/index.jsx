import CompletedTasks from "../CompletedTasks";
import ActiveTasks from "../ActiveTasks";

import styles from "./TaskList.module.scss";

const TaskList = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.taskList}>
        <ActiveTasks />
      </div>

      <div className={styles.taskList}>
        <CompletedTasks />
      </div>
    </div>
  );
};

export default TaskList;
