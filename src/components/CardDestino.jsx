import styles from "../styles/CardDestino.module.css";

export default function CardDestino({ name, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}