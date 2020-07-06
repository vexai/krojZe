import React, { useState } from "react";
import "../App.scss";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Krojze(props, fullpage_api) {
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
  };
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  };

  const [readMore, setReadMore] = useState(false);
  const growReadMore = useSpring({ fontSize: readMore ? "30px" : "0px" });

  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={["#fff", "#f0d0c4", "#f9f9f9", "white"]}
      verticalCentered={true}
      navigation={true}
      render={({ state, fullpageApi }) => {
        const rerender = () => {
          setTimeout(function () {
            fullpageApi.reBuild();
          }, 1000);
        };

        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <main>
                <div className="section1__grid-text">
                  <h1 className="section1__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.{" "}
                    <span className="blue">
                      Ultricies tristique nulla aliquet enim tortor at auctor.
                    </span>{" "}
                    Feugiat in fermentum posuere urna ristique nulla aliquet.
                  </h1>
                </div>
              </main>
              <div className="section1__footer">
                <main>
                  <div className="section1__short-line short-line__grid1">
                    <NavLink exact to="/kroje" className="section1__link">
                      <p>Wanda</p>
                    </NavLink>
                    <p>Kino Wanda</p>
                  </div>
                  <div className="section1__short-line short-line__grid2">
                    <NavLink exact to="/kroje" className="section1__link">
                      <p>Sukiennice</p>
                    </NavLink>
                    <p className="">Rynek Główny</p>
                  </div>
                  <div className="section1__short-line short-line__grid3">
                    <NavLink exact to="/kroje" className="section1__link">
                      <p>Recepcja</p>
                    </NavLink>
                    <p>Hotel Forum</p>
                  </div>
                </main>
              </div>
            </div>

            <div className="section">
              <h5 className="section2__text">
                <span className="section2__font1">KROJE</span>
                <span className="section2__font2"> pisma</span>
                <br />
                <span className="section2__font3"> ZNALEZIONE</span>
                <br />
                <span className="section2__font4">W KRAK</span>
                <span className="section2__font1">OWIE</span>
              </h5>
            </div>

            <div className="section fp-auto-height-responsive">
              <main>
                <div className="section3__grid-text">
                  <h1 className="section3__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    <span className="red">
                      Ultricies tristique nulla aliquet enim tortor at auctor.
                    </span>{" "}
                    Feugiat in fermentum posuere urna ristique nulla aliquet, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </h1>
                </div>
              </main>
              <button
                className="section3__button"
                onClick={() => {
                  setReadMore(!readMore);
                  rerender();
                }}
              >
                {readMore ? "MNIEJ" : "CZYTAJ WIĘCEJ"}
              </button>
              <main>
                <animated.div style={growReadMore} className="section3__readMore-text">
                  Ultricies tristique nulla aliquet enim tortor at auctor.Feugiat in fermentum
                  posuere urna ristique nulla aliquet, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.Ultricies tristique nulla aliquet enim tortor at
                  auctor.Feugiat in fermentum posuere urna ristique nulla aliquet, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.Ultricies tristique nulla
                  aliquet enim tortor at auctor.Feugiat in fermentum posuere urna ristique nulla
                  aliquet, sed do eiusmod tempor incididunt ut labore iquet, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.Ultricies tristique nulla aliquet enim
                  tortor at auctor.Feugiat in fermentum posuere urna ristique nulla aliquet, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.Ultricies tristique
                  nulla aliquet enim tortor at auctor.Feugiat in fermentum posuere urna ristique
                  nulla aliquet, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ultricies tristique nulla aliquet enim tortor at auctor.Feugiat in
                  fermentum posuere urna ristique nulla aliquet, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.Ultricies tristique nulla aliquet enim tortor at
                  auctor.Feugiat in fermentum posuere urna ristique nulla aliquet, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.Ultricies tristique nulla
                  aliquet enim tortor at auctor.Feugiat in fermentum posuere urna ristique nulla
                  aliquet, sed do eiusmod tempor incididunt ut
                </animated.div>
              </main>
            </div>

            <div className="section fp-auto-height">
              <div style={{ minHeight: "13em" }}>
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
