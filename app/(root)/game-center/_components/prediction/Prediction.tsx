
import "./prediction.scss"

const Prediction = () => {

    return (
        
        <div className="content-block">
            <div className="content-block__header">
                <p>PRONÓSTICOS PREVIOS AL PARTIDO</p>
                <img width="62" height="27" src="@img/reclama/lv-bet.webp" alt="lv-bet"/>
            </div>
            
            <div className="content-block__body">

                <div className="static-game__block _active">
                    <div className="static-game__body">
                        <h2 className="static-game__title">Quién ganará el partido?</h2>
                        <div className="static-game__label">Seleccione una de las opciones para comprobar su predicción.</div>
                    </div>
                    <div className="static-game__content static-content">
                        <div className="static-content__top static-block ">
                            <div className="static-block__item static-block-left ">
                                <span>1</span>
                                <span>65%</span>
                            </div>
                            <div className="static-block__item static-block-center">
                                <span> X</span>
                                <span>20%</span>
                            </div>
                            <div className="static-block__item static-block-right">
                                <span>2</span>
                                <span>15%</span>
                            </div>
                        </div>
                        <div className="static-content__bottom">
                            <div className="static-content__item static-content__item-left">
                                1.44
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29166 1.31161C5.34649 1.21651 5.4254 1.13753 5.52045 1.08261C5.6155 1.02769 5.72334 0.998779 5.83312 0.998779C5.94289 0.998779 6.05073 1.02769 6.14578 1.08261C6.24083 1.13753 6.31974 1.21651 6.37457 1.31161L9.97207 7.54245C10.0269 7.63746 10.0558 7.74523 10.0558 7.85494C10.0558 7.96465 10.0269 8.07243 9.97208 8.16744C9.91723 8.26245 9.83833 8.34135 9.74332 8.39621C9.64831 8.45106 9.54053 8.47994 9.43082 8.47995H2.23582C2.12611 8.47994 2.01834 8.45106 1.92333 8.39621C1.82832 8.34135 1.74942 8.26245 1.69457 8.16744C1.63972 8.07243 1.61084 7.96465 1.61084 7.85494C1.61084 7.74523 1.63972 7.63746 1.69457 7.54245L5.29207 1.31161H5.29166Z" fill="#018000"/>
                                </svg>
                            </div>
                            <div className="static-content__item static-content__item-center">
                                X. 4.74
                            </div>
                            <div className="static-content__item static-content__item-right" >
                                6.48
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62515 7.16715C4.67998 7.26225 4.75889 7.34123 4.85395 7.39615C4.949 7.45107 5.05684 7.47998 5.16661 7.47998C5.27639 7.47998 5.38423 7.45107 5.47928 7.39615C5.57433 7.34123 5.65324 7.26225 5.70807 7.16715L9.30557 0.936314C9.36043 0.841303 9.3893 0.733527 9.38931 0.623818C9.38931 0.514109 9.36043 0.406332 9.30558 0.31132C9.25072 0.216309 9.17183 0.13741 9.07682 0.0825539C8.98181 0.0276976 8.87403 -0.00118303 8.76432 -0.00118589H1.56932C1.45961 -0.00118303 1.35184 0.0276976 1.25683 0.0825539C1.16182 0.13741 1.08292 0.216309 1.02807 0.31132C0.973213 0.406332 0.944335 0.514109 0.944336 0.623818C0.944337 0.733527 0.973215 0.841303 1.02807 0.936314L4.62557 7.16715H4.62515Z" fill="#FF4848"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <button className="bottom-info__button button">Apostar ahora</button>
                </div>
            </div>
        </div>
        
        
    )
}

export default Prediction