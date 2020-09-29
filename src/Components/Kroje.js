import React from "react";
import "../App.scss";
import KrojeFonty from "./KrojeFonty/KrojeFonty";
import recepcja from "../Imgs/recepcja.jpg";
import wanda from "../Imgs/wanda.jpg";
import herby from "../Imgs/herby.jpeg";
import { NavLink } from "react-router-dom";
import logo from "../Imgs/logo.png";

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
        description="RECEPCJA to napis zlokalizowany pierwotnie w Motelu Krak, a obecnie umieszczony w Hotelu Forum w Krakowie.
         Sam hotel położony nad brzegiem Wisły został zamknięty w 2002 roku po ponad 13 latach funkcjonowania.
          Był to jeden z najważniejszych budynków zrealizowanych w Krakowie przez Janusza Ingardena. Projekt        
        budynku powstał w latach 1973-1977 i miał być najbardziej nowoczesnym i jednocześnie luksusowym miejscem 
        na mapie Polski. Po zakończeniu działalności hotelowej, Forum zyskało drugie życie jako szeroko pojęty ośrodek kultury. 
        Usytuowano w nim m.in. bar, nad którym zawieszono właśnie neon z napisem RECEPCJA."
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
        description="Krój pisma Wanda wzorowany na unikatowym neonie dawnego kina Wanda usytuowanego przy ulicy Św.
        Gertrudy, który został zaprojektowany przez Samuela Manbera ok. 1912 roku, tylko kilka tygodni wcześniej niż
        kino ”Uciecha”. Rolę ośrodka kultury pełniło przez blisko 90 lat."
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
        description="Krój pisma Wanda wzorowany na unikatowym neonie dawnego kina Wanda usytuowanego przy ulicy Św.
        Gertrudy, który został zaprojektowany przez Samuela Manbera ok. 1912 roku, tylko kilka tygodni wcześniej niż
        kino ,,Uciecha”. Rolę ośrodka kultury pełniło przez blisko 90 lat."
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
