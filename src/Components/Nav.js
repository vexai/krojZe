import React from 'react';
import '../App.scss';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul className="navbar__links">
            
            <NavLink className="navbar__link" activeClassName="navbar__link--active" exact to="/">
                <h3>krój_że</h3>
            </NavLink>

            <NavLink className="navbar__link" activeClassName="navbar__link--active" to="/kroje">
                <li> Kroje</li>
            </NavLink>

            <NavLink className="navbar__link" activeClassName="navbar__link--active" to ="/mapa">
                <li>Mapa</li>
            </NavLink>

            <NavLink className="navbar__link" activeClassName="navbar__link--active" to ="/kontakt">
                <li>Kontakt</li>
            </NavLink>
        </ul>
    </nav>
  );
}

export default Nav;
