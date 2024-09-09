import  styles from "./reclama.module.scss"

const Reclama = () => {
    return (
        <div className="reclama__block reclama-block-1">
            <div className={styles.reclamabody}>
                <div className={styles.reclamalabel}>
                    <p>Las probabilidades se calculan</p>
                    <img 
                        height={16}
                        width={43}
                        src="/assets/reclama/lv-bet.webp" 
                        alt="lb-bet"
                    />
                </div>
                <p className={styles.reclamatitle}>
                    “Bounus de bienvenida de hasta $100”
                </p>
                <a href="#" className={styles.reclamabutton}>
                    RECLAMAR
                </a>
            </div>
        </div> 
    )
}

export default Reclama