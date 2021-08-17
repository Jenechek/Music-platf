import style from './Login.module.scss'
import LoginHead from './LoginHead/LoginHead';
import Loginner from './Loginner/Loginner'
import Inputs from './Inputs/Inputs';
import SignIn from './SignIn/SignIn';
import Reg from './Reg/Reg';

const Login = (props) => {
    return (
        <div className={style.logWrap}>
            <LoginHead />
            <Loginner />
            <Inputs />
            <SignIn />
            <Reg />
        </div>
    )
}

export default Login;