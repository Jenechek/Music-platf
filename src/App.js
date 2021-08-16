import style from './App.module.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Hello from './components/Hello/Hello'

function App() {
  return (
    <div className={style.App}>
      <Redirect from='/' to='/hello' />
      <Route path='/hello' render={() => { return <Hello />}} />
      <Route path='/login' render={() => { return <Login /> }} />
      <Route path='/registr' render={() => { return <Registration /> }} />
    </div>
  );
}

export default App;
