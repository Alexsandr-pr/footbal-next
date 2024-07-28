import  "./reclama.scss"

const Reclama = () => {
    return (
        <div className="reclama__block reclama-block-1">
            <div className="reclama-block-1__body">
                <div className="reclama-block-1__label">
                    <p>Las probabilidades se calculan</p>
                    <img src="/assets/reclama/lv-bet.webp" alt="lb-bet"/>
                </div>
                <p className="reclama-block-1__title">
                    “Bounus de bienvenida de hasta $100”
                </p>
                <a href="#" className="reclama-button">
                    RECLAMAR
                </a>
            </div>
        </div> 
    )
}

export default Reclama