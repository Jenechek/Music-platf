import style from './Footer.module.scss'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = (props) => {
    return (
        <div className={style.footWrap}>
            <div className={style.logo}><a href="">@MusicLab</a></div>
            <div className={style.block}>
                <a href="">Info</a>
                <a href="">Vacatures</a>
                <a href="">For the Recirds</a>
            </div>
            <div className={style.block}>
                <a href="">Artiestenservices</a>
                <a href="">Ontwikkelaars</a>
                <a href="">Advertising</a>
                <a href="">Investeerders</a>
                <a href="">Leveranciers</a>
            </div>
            <div className={style.block}>
                <a href="">Ondersteuning</a>
                <a href="">Web Player</a>
                <a href="">Gratis mobiele app</a>
            </div>
            <div className={style.mes}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    )
}

export default Footer;