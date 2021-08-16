import style from './RegButtons.module.css'
import { NavLink } from 'react-router-dom';

const RegButtons = (props) => {
    return (
        <div className={style.regButtonsWrap}>
            <div className={style.regButton}>
                <NavLink to='/home'>Регистрация</NavLink>
            </div>
            <div className={style.logButton}>
                <NavLink to='/login'>Есть аккаунт? Войти...</NavLink>
            </div>
        </div>
    )
}

export default RegButtons;