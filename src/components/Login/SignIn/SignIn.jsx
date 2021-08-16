import style from './SignIn.module.css'

const SignIn = (props) => {
    return (
        <div className={style.signIn}>
            <div className={style.checkbox}>
                <label>
                    <input type="checkbox" /> Запомнить меня
                </label>
            </div>
            <div>
                <button>Войти</button>
            </div>
        </div>
    )
}

export default SignIn;