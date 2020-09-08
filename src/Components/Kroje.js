import React from "react";
import "../App.scss";
import KrojeFonty from "./KrojeFonty/KrojeFonty";
import recepcja from "../Imgs/recepcja.jpg";
import wanda from "../Imgs/wanda.jpg";
import herby from "../Imgs/herby.jpeg";
import { NavLink } from "react-router-dom";

function Kroje() {
  return (
    <>
      <div className="container__title">
        <main>
          <div className="container__fonts-name">
            <p>Nazwa kroju</p>
          </div>
          <div className="container__fonts-place">
            <p>Miejsce</p>
          </div>
          <div className="container__fonts-plusminus">
            <p>Opis</p>
          </div>
        </main>
      </div>

      <main>
        <div className="container__line"></div>
      </main>
      <KrojeFonty
        id="recepcja"
        anchor="#recepcja"
        name="Recepcja"
        place="Hotel Forum"
        className="input__font2"
        imgUrl={recepcja}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor. Feugiat 
        in fermentum posuere urna. Odio ut sem nulla pharetra diam sit amet nisl. Nascetur ridiculus mus m
        auris vitae ultricies. Cursus mattis molestie a iaculis at erat. Donec pretium vulputate sapien nec. 
        Non sodales neque sodales ut etiam sit. Tristique risus nec feugiat in fermentum posuere urna nec. At
         volutpat diam ut venenatis. Eget nulla facilisi etiam dignissim. Sed viverra tellus in hac habitasse 
         platea. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."
      />

      <main>
        <div className="container__line"></div>
      </main>
      <KrojeFonty
        id="wanda"
        anchor="#wanda"
        name="Wanda"
        place="Kino Wanda"
        className="input__font3"
        imgUrl={wanda}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor. Feugiat 
        in fermentum posuere urna. Odio ut sem nulla pharetra diam sit amet nisl. Nascetur ridiculus mus m
        auris vitae ultricies. Cursus mattis molestie a iaculis at erat. Donec pretium vulputate sapien nec. 
        Non sodales neque sodales ut etiam sit. Tristique risus nec feugiat in fermentum posuere urna nec. At
         volutpat diam ut venenatis. Eget nulla facilisi etiam dignissim. Sed viverra tellus in hac habitasse 
         platea. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."
      />

      <main>
        <div className="container__line"></div>
      </main>

      <KrojeFonty
        id="herby"
        anchor="#herby"
        name="Herby"
        place="Rynek Główny"
        className="input__font1"
        imgUrl={herby}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor. Feugiat 
        in fermentum posuere urna. Odio ut sem nulla pharetra diam sit amet nisl. Nascetur ridiculus mus m
        auris vitae ultricies. Cursus mattis molestie a iaculis at erat. Donec pretium vulputate sapien nec. 
        Non sodales neque sodales ut etiam sit. Tristique risus nec feugiat in fermentum posuere urna nec. At
         volutpat diam ut venenatis. Eget nulla facilisi etiam dignissim. Sed viverra tellus in hac habitasse 
         platea. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."
      />

      <main>
        <div className="container__line"></div>
      </main>

      <footer>
        <div className="footer__grid1">
          <div className="footer__title">Krój_że</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/kontakt">
            Kontakt
          </NavLink>
          <NavLink className="footer__link" exact to="/">
            O projekcie
          </NavLink>
        </div>
        <div className="footer__grid2">
          <div className="footer__title">Kroje</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/kroje">
            Pobierz
          </NavLink>
        </div>
        <div className="footer__grid3">
          <div className="footer__title">Mapa</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/mapa">
            Archiwum
          </NavLink>
          <NavLink className="footer__link" exact to="/mapa">
            Dodaj zdjęcie
          </NavLink>
        </div>
      </footer>
    </>
  );
}

export default Kroje;
