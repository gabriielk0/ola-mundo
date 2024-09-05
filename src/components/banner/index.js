import styles from './banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (

        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Gabriel Carvalho, Apaixonado por tecnologia e em constante busca por novos desafios, busco estágio na área de desenvolvimento web para aplicar meus conhecimentos e contribuir para o crescimento da empresa.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    alt='circulo'
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto}
                    alt='foto do gostoso'
                    aria-hidden={true}
                />
            </div>
        </div>
    )
}