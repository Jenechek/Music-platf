import style from './RegInputs.module.scss'

const RegInputs = (props) => {
    return (
        <div className={style.regInputsWrap}>
            <form>
                <div className={style.regInput}>
                    <label>Введите ваш @email:</label>
                    <input type="text" placeholder='@email' />
                </div>
                <div className={style.regInput}>
                    <label>Введите пароль:</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div className={style.regInput}>
                    <label>Повторите пароль:</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div className={style.regInput}>
                    <label>Придумайте имя для вашего профиля:</label>
                    <input type="text" placeholder='Profile name' />
                </div>
            </form>
        </div>
    )
}

export default RegInputs;