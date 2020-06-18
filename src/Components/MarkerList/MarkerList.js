import React, {useState} from "react";

import Place from "./Place";


const MarkerList = ({places, onSelect}) => {
  const [laodMore, setLoadMore] = useState(0);

  return (
      <div>
        {Object.keys(places).slice(0, (laodMore + 1) * 4).map(key =>
            <Place id={key}
                   onClick={(id) => onSelect(id)}
                   lat={places[key].lat}
                   lng={places[key].lng}
                   title={places[key].title}
                   imageUrl={places[key].imageUrl}
                   description={places[key].description}/>
        )}
        {Object.keys(places).slice(0, (laodMore + 1) * 4).length != Object.keys(places).length &&
        <button onClick={() => setLoadMore(laodMore + 1)}>laod more</button>}
      </div>
  )
}

export default MarkerList;
