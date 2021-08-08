import style from './Head.module.css'
import logo from './images/desc.png'

const Head = (props) => {
    return (
        <div className={style.headWrap}>
            <div className={style.logo}><a href="">@MusicLab</a></div>
            <div className={style.headRefs}>
                <a href="">Artists</a>
                <a href="">Top albums</a>
                <a href="">Singles</a>
                <a href="">Instagram</a>
                <a href="">Premium</a>
            </div>
        </div>
    )
}

export default Head;