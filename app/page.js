import Image from "next/image";
import hand from "./public/images/hand.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.Image}>
      <h1>Home</h1>
      <p>Offering a helping hand.</p>
      <Image src={hand} alt="An outstretched hand" width={500} height={500} />
    </div>
  );
}
