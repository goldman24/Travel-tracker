import styles from "./CopyRight.module.css";

function CopyRight() {
  return (
    <p className={styles.copyright}>
      &copy; Copyright {new Date().getFullYear()} by WorldWise inc.
    </p>
  );
}

export default CopyRight;
