import CompletedTasks from "../CompletedTasks";
import NewTasks from "../NewTasks";

import styles from "./Tasks.module.scss";

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.taskList}>
        <NewTasks />
      </div>

      <div className={styles.taskList}>
        <CompletedTasks />
      </div>
    </div>
  );
};

export default Tasks;
