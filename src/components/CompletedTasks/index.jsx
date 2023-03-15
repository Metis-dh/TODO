import { useSelector } from "react-redux";

import Task from "../Task";

import styles from "./CompletedTasks.module.scss";

const CompletedTasks = () => {
  const completedTasks = useSelector((state) =>
    state.todo.taskList.filter((task) => task.completed === true)
  );

  return (
    <>
      <h3>Завершенные задачи</h3>
      <div className={styles.taskListItems}>
        {completedTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </>
  );
};

export default CompletedTasks;
