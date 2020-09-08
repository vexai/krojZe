import React, { useState } from "react";
import PlaceStyle from "./PlaceStyle.scss";
import { HashLink as Link } from "react-router-hash-link";

const Place = ({ title, imageUrl, description, id, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={hover ? { cursor: "pointer" } : null}
      onClick={() => onClick(id)}
    >
      <Link smooth to="/mapa#map">
        <div>
          <img className="place__img-box" src={imageUrl} alt="imgs" />
        </div>
      </Link>
      <div className="place__title-desc">
        <div>
          <div style={{ fontWeight: "bold" }}>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Place;
