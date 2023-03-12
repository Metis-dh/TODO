import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
