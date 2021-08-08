import style from './App.module.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import HelloUser from './components/HelloUser/HelloUser';
import Footer from './components/Footer/Footer';
import fonImg from './images/ed-sheeran.jpg'
import { Switch, Route } from 'react-router-dom'
import Head from './components/Head/Head';

function App() {
  return (
    <div className={style.App}>
      <Head />
      <div className={style.content}>
        <img src={fonImg} alt='' />
        <HelloUser />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
