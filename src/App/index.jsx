import { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

import styles from "./App.module.scss";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <Sidebar />
      <div className={styles.main}>
        <Header setOpenModal={setOpenModal} openModal={openModal} />
        <Home />
      </div>
    </div>
  );
}

export default App;
