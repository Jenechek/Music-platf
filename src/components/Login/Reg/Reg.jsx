import style from './Reg.module.css'
import { NavLink } from 'react-router-dom';

const Reg = (props) => {
    return (
        <div className={style.reg}>
            <div className={style.text}>Нет аккаунта?</div>
            <NavLink to='/registr'>Зарегистрироваться</NavLink>
        </div>
    )
}

export default Reg;