import style from './Inputs.module.scss'

const Inputs = (props) => {
    return (
        <div className={style.logInputsWrap}>
            <form>
                <div className={style.logInputs}>
                    <label>Введите ваш @email:</label>
                    <input type='text' placeholder='@email' />
                </div>
                <div className={style.logInputs}>
                    <label>Введите пароль:</label>
                    <input type='password' placeholder='Password' />
                </div>
                <div className={style.pasw}><a href="">Забыли пароль?</a></div>
            </form>
        </div>
    )
}

export default Inputs;