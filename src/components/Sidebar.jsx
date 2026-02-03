import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import CopyRight from "./CopyRight";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* A React Router felismeri ezt az Outlet elementet, és ennek a helyére
      rakja be azt a nested elementet, amit beraktunk az app alá az app.jsx -ben
      app/valami -t fogja renderelni bele */}
      <Outlet />
      <footer className={styles.footer}>
        <CopyRight />
      </footer>
    </div>
  );
}

export default Sidebar;
