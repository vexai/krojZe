import React from 'react';
import '../App.scss';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
      
    <nav className="a-zero">
        <ul className="navbar__links">
            
            <NavLink className="navbar__link" activeClassName="navbar__link--active" exact to="/">
                <h3>krój_że</h3>
            </NavLink>

            <NavLink className="navbar__link" activeClassName="navbar__link--active" to="/kroje">
                <li><h4>Kroje</h4></li>
            </NavLink>

            <NavLink className="navbar__link" activeClassName="navbar__link--active" to ="/mapa">
                <li><h4>Mapa</h4></li>
            </NavLink>

            <NavLink className="navbar__link" activeClassName="navbar__link--active" to ="/kontakt">
                <li><h4>Kontakt</h4></li>
            </NavLink>
        </ul>
    </nav>
    
  );
}

export default Nav;
