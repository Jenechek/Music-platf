import { NavLink } from 'react-router-dom'
import style from './HelloUser.module.scss'
import politic from './components/politic.pdf'

const HelloUser = (props) => {
    return (
        <div>
            <div className={style.hello}>
                <div className={style.helloWrap}>
                    <div className={style.helloUser}>YOU ARE WELCOME!</div>
                    <div className={style.secondHello}>PLEASE LOGIN OR</div>
                    <div className={style.secondHello}>REGISTRATION</div>
                    <div className={style.hrefs}>
                        <NavLink to='/login'>Login</NavLink> <NavLink to='/registr'>Registration</NavLink>
                    </div>
                    <div className={style.politic}><a href={politic} target='_blank' rel='noreferrer' >politic confidencial...</a></div>
                </div>
            </div>
        </div>
    )
}

export default HelloUser;