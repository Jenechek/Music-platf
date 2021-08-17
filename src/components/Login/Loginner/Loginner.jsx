import style from './Loginner.module.scss'

const Loginner = (props) => {
    return (
        <div>
            <div className={style.loginner}>
                <div>Вы можете войти через:</div>
                <a href='' className={style.google}>ВОЙТИ ЧЕРЕЗ GOOGLE</a>
                <a href='' className={style.vk}>ВОЙТИ ЧЕРЕЗ VK</a>
            </div>
            <div className={style.orWrap}>
                <hr width='160px' size='1' align='left' /><div className={style.orText}>или</div><hr width='185px' size='1' align='right' />
            </div>
        </div>
    )
}

export default Loginner;