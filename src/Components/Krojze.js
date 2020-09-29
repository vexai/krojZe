import React, { useState } from "react";
import "../App.scss";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import bgVideo from "../Imgs/Film_kroje2.mp4";

function Krojze(props, fullpage_api) {
  const [readMore, setReadMore] = useState(false);
  const growReadMore = useSpring({ display: readMore ? "block" : "none" });

  return (
    <ReactFullpage
      navigation={true}
      scrollOverflow={true}
      sectionsColor={["#f9f9f9", "#ffffff", "#f9f9f9", "#ffffff"]}
      verticalCentered={true}
      render={({ fullpageApi }) => {
        const reRender = () => {
          setTimeout(function () {
            fullpageApi.reBuild();
          }, 500);
        };

        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <main>
                <div className="section1__grid-text">
                  <h1 className="section1__text">
                    <span className="blue">
                    Krój_że{" "}
                    </span>
                    pozwala znaleźć ciekawe przykłady nadające się do wykorzystania w profesjonalnej pracy, między
                    innymi do projektowania fontów.{" "}
                    <span className="blue">
                    Można zainspirować się typografią oraz stworzyć nowy krój wpisujący
                    się w kanon współczesndej typografii.
                    </span>
                  </h1>
                </div>
              </main>
              <div className="section1__footer">
                <div className="section1__grid1">
                  <div className="section1__short-line"></div>
                  <NavLink className="section1__link section1__title" exact to="/kroje#wanda__link">
                    Wanda
                  </NavLink>
                  <p className="section1__under-link">Kino Wanda</p>
                </div>
                <div className="section1__grid2">
                  <div className="section1__short-line"></div>
                  <NavLink className="section1__link section1__title" exact to="/kroje#herby__link">
                    Herby
                  </NavLink>
                  <p className="section1__under-link">Rynek Główny</p>
                </div>
                <div className="section1__grid3">
                  <div className="section1__short-line"></div>
                  <NavLink
                    className="section1__link section1__title"
                    exact
                    to="/kroje#recepcja__link"
                  >
                    Recepcja
                  </NavLink>
                  <p className="section1__under-link">Hotel Forum</p>
                </div>
              </div>
            </div>

            <div className="section">
              {/* <h5 className="section2__text">
                <span className="section2__font1">KROJE</span>
                <span className="section2__font2"> pisma</span>
                <br />
                <span className="section2__font3"> ZNALEZIONE</span>
                <br />
                <span className="section2__font4">W KRAK</span>
                <span className="section2__font1">OWIE</span>
              </h5> */}
              <video loop muted data-autoplay className="section2__video">
                <source src={bgVideo} type="video/mp4"></source>
              </video>
            </div>
            

            <div className="section fp-auto-height-responsive">
              <main>
                <div className="section3__grid-text">
                  <h3 className="section3__text">
                  W katalogu Biblioteki Głównej Akademii Sztuk Pięknych w Krakowie pod hasłem typograa wernakularna nie
                  odnajdujemy zbyt wielu informacji.{" "}
                    <span className="red">
                    Sam termin "wernakularny” oznacza zarówno nieprofesjonalny, czy rodzimy, 
                    oraz lokalny, związany z daną społecznością i do niej przynależny, wyrastający z jej cech swoistych, będący
                    nośnikiem jej kulturowej odrębności.
                    </span>{" "}
                  </h3>
                </div>
              </main>

              <main>
                <animated.div style={growReadMore} className="section3__readMore-text">
                W wielu przypadkach są to dzieła anonimowe i/lub zbiorowe. Termin ten
                można odnieść do wielu szyldów i napisów, które napotykamy na ulicy. Przymiotnik "wernakularny” jako
                pierwszy zastosował architekt Gilbert Scott w 1856 roku odnosząc się do architektury tworzonej techniką
                regionalną. Jednak historia kultury wernakularnej rozpoczęła się znacznie wcześniej. W epoce renesansowej
                obok kultury tworzonej na bazie tradycji łacińskiej powstaje kultura opierająca się na regionalizmach. Przejawia
                 się ona nie tylko w architekturze. Obecnie jej domeną jest przede wszystkim kultura popularna, zwłaszcza
                ta tworzona z wykorzystaniem nowych mediów. W projektowaniu gracznym termin "wernakularny” był do
                niedawna synonimem bezguścia, z którym projektanci próbowali na różne sposoby walczyć. Obecnie w gronie
                specjalistów można zaobserwować dwa stanowiska w kwestii wernakularyzmu: jedni uważają go za źródło
                inspiracji, drudzy za dość przypadkowy twór wykonany ręką niewykształconego amatora.
                </animated.div>
              </main>
              <button
                className="section3__button"
                onClick={() => {
                  setReadMore(!readMore);
                  reRender();
                }}
              >
                {readMore ? "Mniej" : "Czytaj więcej"}
              </button>
            </div>

            <div className="section fp-auto-height">
              <div style={{ minHeight: "12em" }}>
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
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

export default Krojze;
