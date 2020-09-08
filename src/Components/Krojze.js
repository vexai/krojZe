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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    <span className="red">
                      Ultricies tristique nulla aliquet enim tortor at auctor.
                    </span>{" "}
                    Feugiat in fermentum posuere urna ristique nulla aliquet, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </h3>
                </div>
              </main>

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
                  aliquet, sed do eiusmod tempor incididunt ut!!!!
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
