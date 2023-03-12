import TaskInfo from "../../components/TaskInfo";
import Tasks from "../../components/Tasks";
import TimeDate from "../../components/TimeDate";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftSection}>
        <TaskInfo />
        <Tasks />
      </div>

      <div className={styles.rightSection}>
        <TimeDate />
      </div>
    </div>
  );
};

export default Home;
