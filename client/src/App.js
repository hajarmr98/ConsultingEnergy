import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import {Router, Switch, Route} from 'react-router-dom';
import Who from './components/Who/Who';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Opinions2 from './components/Opinions2/Opinions2';

function App() {
  return (
    <div className="App">
       <Switch>
      <Route exact path='/' render={ props => <Intro />}  />
      <Route  path="/quienes-somos" render={ props => <Who />} />
      <Route  path="/contacta" render={ props => <Contact />} />
      <Route  path="/opiniones" render={ props => <Opinions2 />} />
      <Route  path="/menu" render={ props => <Menu  {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
