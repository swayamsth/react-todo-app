import styles from "./footer.module.css";

export default function Footer({ completedTodos, leftTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Tasks: {completedTodos}</span>
      <span className={styles.item}>Left Tasks: {leftTodos}</span>
    </div>
  );
}
