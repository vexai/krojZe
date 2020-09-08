import React, { useEffect } from "react";
import { LayersControl, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./PlaceMarkerStyle.scss";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/layers.png"),
  iconUrl: require("leaflet/dist/images/layers.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const PlaceMarker = ({ lat, lng, id, title, description, imageUrl, open, onClose }) => {
  useEffect(() => {
    const markers = document.getElementsByClassName(
      "leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
    );
    open && markers[id].click();
  }, [open]);

  return (
    <>
      <div
        id="backdropM"
        onClick={() => {
          const a = document.getElementsByClassName("modalM");
          const b = document.getElementById("backdropM");
          for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("visible");
          }
          b.classList.remove("visible");
        }}
      ></div>
      <div className="modalM">
        <img className="modal__mapImg" src={imageUrl} alt="imgs" />
      </div>
      <Marker key={id} position={[lng, lat]} draggable={false} opacity={1}>
        {
          <Popup className="popup__font">
            <div style={{ color: "#004e98", fontWeight: "bold" }}>{title}</div>
            <div style={{ color: "#004e98", marginBottom: "10px" }}>{description}</div>
            <div
              onClick={() => {
                const a = document.getElementsByClassName("modalM")[id];
                const b = document.getElementById("backdropM");
                a.classList.add("visible");
                b.classList.add("visible");
              }}
            >
              <img id="mapImg" src={imageUrl} style={{ width: "200px" }} alt="imgs" />
            </div>
          </Popup>
        }
      </Marker>
    </>
  );
};

export default PlaceMarker;
