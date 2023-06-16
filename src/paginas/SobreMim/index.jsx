import PostModelo from 'componentes/PostModelo'
import React from 'react'
import styles from './SobreMim.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Antônio!
      </h3>

      <img
        src={fotoSobreMim}
        alt='Foto sobre mim'
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione provident nostrum hic rem vitae tempore possimus suscipit commodi dolor dolore nisi placeat, repellat esse culpa beatae modi itaque pariatur deserunt.
      </p>
    </PostModelo>
  )
}
