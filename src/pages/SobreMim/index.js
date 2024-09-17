import styles from "./sobremim.module.css";

import PostModelo from "PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <main>
      <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim" />
      <h3 className={styles.subtitulo}>Olá, eu sou Gabriel</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do esquisito"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>Bla</p>
      <p className={styles.paragrafo}>Bla</p>
      <p className={styles.paragrafo}>Bla</p>
      <p className={styles.paragrafo}>Bla</p>
    </main>
  );
}
