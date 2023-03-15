import { useSelector } from "react-redux";
import Task from "../Task";

import styles from "./ActiveTask.module.scss";

const ActiveTask = () => {
  const activeTasks = useSelector((state) =>
    state.todo.taskList.filter((task) => task.completed === false)
  );

  return (
    <>
      <h3>Активные задачи</h3>
      <div className={styles.taskListItems}>
        {activeTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </>
  );
};

export default ActiveTask;
