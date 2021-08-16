import style from './Hello.module.css'
import Footer from './Footer/Footer';
import Head from './Head/Head';
import HelloUser from './HelloUser/HelloUser';
import fonImg from './images/ed-sheeran.jpg'

const Hello = (props) => {
    return (
        <div>
            <Head />
            <div className={style.content}>
                <img src={fonImg} alt='' />
                <HelloUser />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Hello;