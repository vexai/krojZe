import React, { useState } from "react";
import MarkerListStyle from "./MarkerList.scss";

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
    </>
  );
};

export default MarkerList;
