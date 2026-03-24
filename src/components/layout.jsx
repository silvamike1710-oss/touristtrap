import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout ({ children }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Tourist Trap</h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/destinos>">Destinos</Link>
                </nav>
            </header>

            <main>{children}</main>

            <footer className={styles.footer}>
                <p> © 2026 TouristTrap </p>
            </footer>
        </div>
    );
}