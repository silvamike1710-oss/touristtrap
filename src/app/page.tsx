import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Bem vindo ao TouristTrap</h2>
      <p>Descubra como perder sua carteira da maneira mais rapida em inumeros países.</p>
      <Link href="/destinos" className={styles.button}>
        Veja os destinos
      </Link>
    </div>
  );
}