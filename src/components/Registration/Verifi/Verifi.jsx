import style from './Verifi.module.css'

const Verifi = (props) => {
    return (
        <div className={style.verifiWrap}>
            <form>
                <div className={style.verifiText}>Укажите ваш пол:</div>
                <label><input type="radio" />Man</label>
                <label><input type="radio" />Wooman</label>
            </form>
            <div className={style.politic}><input type="radio" />Deel mijn registratiegegevens met de contentleveranciers van MusicLab voor marketingdoeleinden. Houd er rekening mee dat je gegevens mogelijk worden overdragen naar een land buiten de EER, zoals beschreven in ons privacybeleid.</div>
        </div>
    )
}

export default Verifi;