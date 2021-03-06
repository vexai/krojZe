import React from "react";
import "../App.scss";
import { NavLink } from "react-router-dom";
import logo from "../Imgs/logo.png";

function Nav() {

  return (
    <nav className="nav__a-zero">
      <ul className="navbar__links">
        <main>
          <NavLink
            className="navbar__link navbar__grid1"
            // activeClassName="navbar__link--active"
            exact
            to="/"
          >
            {/* <h3 className="navbar__link-fontWeight">krój_że</h3> */}
            <img style={{width: '100px', marginTop: '10px'}} src={logo} alt="logo"/>
          </NavLink>
          <NavLink
            className="navbar__link navbar__grid2"
            activeClassName="navbar__link--active"
            to="/kroje"
          >
            <li>
              <h4 className="navbar__link-fontWeight">KROJE</h4>
            </li>
          </NavLink>

          <NavLink
            className="navbar__link navbar__grid3"
            activeClassName="navbar__link--active"
            to="/mapa"
          >
            <li>
              <h4 className="navbar__link-fontWeight">MAPA</h4>
            </li>
          </NavLink>

          <NavLink
            className="navbar__link navbar__grid4"
            activeClassName="navbar__link--active"
            to="/kontakt"
          >
            <li>
              <h4 className="navbar__link-fontWeight">KONTAKT</h4>
            </li>
          </NavLink>
        </main>
      </ul>
    </nav>
  );
}

export default Nav;
