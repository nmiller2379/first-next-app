import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <hr />
      <footer className={styles.Footer}>
        <span>Created by: John Doe</span>
        <span>© 2021</span>
      </footer>
    </div>
  );
}
