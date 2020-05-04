import React from 'react';
import './App.scss';
import Nav from './Components/Nav';
import Kroje from './Components/Kroje';
import Mapa from './Components/Mapa';
import Kontakt from './Components/Kontakt';
import Krojze from './Components/Krojze';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact strict component = {Krojze} />
      <Route path ="/kroje" exact strict component={Kroje} />
      <Route path ="/mapa" exact strict component={Mapa} />
      <Route path ="/kontakt" exact strict component={Kontakt} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
