import React, { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.prototype.options.imagePath = "../Imgs/red-marker.png";

// let myIcon = new L.icon({
//   iconUrl: require("red-marker.png"),
//   iconSize: [38, 95],
//   shadowSize: [68, 95],
// });
// L.Marker.prototype.options.icon = myIcon;

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
    <Marker key={id} position={[lng, lat]} draggable={false} opacity={1}>
      {
        <Popup className="popup__font">
          <div style={{ color: "#f83b15" }}>{title}</div>
          <div style={{ color: "#004e98" }}>{description}</div>
          <img src={imageUrl} style={{ width: "200px" }} />
        </Popup>
      }
    </Marker>
  );
};

export default PlaceMarker;
