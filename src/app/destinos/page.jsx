import CardDestino from "../../components/CardDestino";
import styles from "../../styles/Destinos.module.css";

const destinos = [
  { name: "Paris", image: "/images/paris.jpg" },
  { name: "Tokyo", image: "/images/tokyo.jpg" },
  { name: "New York", image: "/images/ny.jpg" },
  { name: "Rio de Janeiro", image: "/images/rio.jpg" },
];

export default function Destinos() {
  return (
    <div className={styles.grid}>
      {destinos.map((destino, index) => (
        <CardDestino key={index} {...destino} />
      ))}
    </div>
  );
}