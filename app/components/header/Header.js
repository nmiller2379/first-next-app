import styles from "./Header.module.css";

export default function Header({ title, description }) {
  return (
    <div className={styles.Header}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
