import style from './LoginHead.module.css'
import { NavLink } from 'react-router-dom';

const LoginHead = (props) => {
    return(
        <div className={style.loginHead}>
            <NavLink to='/hello'>@MusicLab</NavLink>
        </div>
    )
}

export default LoginHead;