import styles from "./Modal.module.scss";

const Modal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer}>
          <h3>Добавить новую задачу</h3>
          <div className={styles.newTask}>
            <p>Что нужно сделать?</p>
            <input type="text" placeholder="Новая задача" />
          </div>
          <div className={styles.modalOptions}>
            <button className={styles.cancelBtn}>Отменить</button>
            <button className={styles.addBtn}>Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
