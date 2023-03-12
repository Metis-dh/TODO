import clock from "../../Assets/icons/clock.svg";
import calendar from "../../Assets/icons/calendar.svg";

import styles from "./TimeDate.module.scss";

const TimeDate = () => {
  return (
    <div className={styles.timeDate}>
      <h4>Такс такс такс</h4>
      <div className={styles.timeDateContent}>
        <div className={styles.timeSection}>
          <p>На часах у нас</p>
          <div className={styles.time}>
            <img src={clock} alt={styles.clock} />
            <p>12:30:43</p>
          </div>
        </div>
        <div className={styles.calendarSection}>
          <p>На часах у нас</p>
          <div className={styles.calendar}>
            <img src={calendar} alt={styles.calendar} />
            <p>5 апреля 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDate;
