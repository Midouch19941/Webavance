import Image from "next/image";
import styles from "./eventAcceuil.module.css";

// Importez les images correctement
import dota2Image from "../public/dota2_event.jpg";
import ufcImage from "../public/match_ufc.jpg";

export default function EventAcceuil() {
  return (
    <div className={styles.eventAcceuil}>
      <div>
        {/* Utilisez les images importées */}
        <Image src={dota2Image} alt="image de dota 2" />
        <p className={styles.text}>ESL ONE Championship</p>
      </div>
      <div>
        {/* Utilisez les images importées */}
        <Image src={ufcImage} alt="image du match UFC" />
        <p className={styles.text}>L&apos;incroyable match de UFC</p>
      </div>
    </div>
  );
}
