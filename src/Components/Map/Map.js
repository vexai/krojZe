import React, { useEffect } from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import L from "leaflet";
import PlaceMarker from "../../Components/PlaceMarker";
import MapStyle from "./MapStyle.scss";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = ({ places, fetchPlaces, selectedId }) => {
  useEffect(() => {
    fetchPlaces();
  }, []);

  const position = [50.0607039, 19.9419405];

  let myIcon = new L.icon({
    iconUrl: require("../PlaceMarker/red-marker2.svg"),
  });
  L.Marker.prototype.options.icon = myIcon;

  return (
    <>
      <div id="map"></div>
      <h2 className="map__header">Wyszukaj miejsce</h2>
      <h3 className="map__header-text">
        Zainspiruj się typografią zastaną
      </h3>
      <main>
        <div className="map__grid">
          <LeafletMap center={position} zoom={13} style={{ height: "450px", marginTop: "20px" }}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.mapbox.com/styles/v1/vexai/ckbqygsmd5dqd1iqacyx5z3sj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmV4YWkiLCJhIjoiY2ticGw1bGNyMmRoMjJ6cHZ3Nzl6cXB1NiJ9.MRRnlvggO6ncUeiY4uIQ1A"
            />
            {Object.keys(places).map((key, index) => (
              <PlaceMarker
                icon={myIcon}
                lat={places[key].lat}
                lng={places[key].lng}
                title={places[key].title}
                imageUrl={places[key].imageUrl}
                id={index}
                open={selectedId === key}
                description={places[key].description}
              />
            ))}
          </LeafletMap>
        </div>
      </main>
    </>
  );
};

export default Map;
