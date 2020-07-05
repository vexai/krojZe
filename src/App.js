import React from 'react';
import './App.scss';
import Nav from './Components/Nav';
import Kroje from './Components/Kroje';
import Mapa from './Components/Mapa';
import Kontakt from './Components/Kontakt';
import Krojze from './Components/Krojze';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import placesReducer from './store/reducers/places';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Nav/>
            <Switch>
              <Route path="/" exact strict component={Krojze}/>
              <Route path="/kroje" exact strict component={Kroje}/>
              <Route path="/mapa" exact strict component={Mapa}/>
              <Route path="/kontakt" exact strict component={Kontakt}/>
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
