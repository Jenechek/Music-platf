import style from './RegLogo.module.css'
import {NavLink} from 'react-router-dom'

const RegLogo = (props) => {
    return (
        <div className={style.regHeadWrap}>
            <div className={style.regHead}>
                <NavLink to='/hello'>@MusicLab</NavLink>
            </div>
            <div className={style.headText}>
                <div>Meld je gratis aan om</div>
                <div>te beginnen met luisteren.</div>
            </div>
            <div className={style.inVK}>
                <a href="">Music lab in VK</a>
            </div>
        </div>
    )
}

export default RegLogo;