import React, { useState } from "react";
import MarkerListStyle from "./MarkerList.scss";

import { NavLink } from "react-router-dom";

import Place from "./Place";

const MarkerList = ({ places, onSelect }) => {
  const [laodMore, setLoadMore] = useState(0);

  return (
    <>
      <div id="markerList" className="marker-list__pagination">
        {Object.keys(places)
          .slice(0, (laodMore + 1) * 4)
          .map((key) => (
            <Place
              id={key}
              onClick={(id) => onSelect(id)}
              lat={places[key].lat}
              lng={places[key].lng}
              title={places[key].title}
              imageUrl={places[key].imageUrl}
              description={places[key].description}
              onClose={() => onSelect("")}
            />
          ))}
      </div>

      {Object.keys(places).slice(0, (laodMore + 1) * 4).length != Object.keys(places).length && (
        <button
          className="marker-list__loadMoreBtn"
          id="loadMoreBtn"
          onClick={() => {
            setLoadMore(laodMore + 1);
          }}
        >
          Zobacz więcej!
        </button>
      )}
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
};

export default MarkerList;
