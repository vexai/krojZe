import React from "react";
import  { Marker, Tooltip, Popup}  from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const PlaceMarker = ({lat,lng, id, title, description, imageUrl, open}) => {

  return(
      <Marker key={id} position={[lng, lat]} draggable={false} opacity={1}>
        {
          open ?  <Tooltip permanent={true}>
            {title}
            <div style={{color: 'red'}}>{title}</div>
            <div style={{color: 'green'}}>{description}</div>
            <img src={imageUrl}  style={{width: '200px'}}/>
          </Tooltip> : <Popup >
            {title}
            <div style={{color: 'red'}}>{title}</div>
            <div style={{color: 'green'}}>{description}</div>
            <img src={imageUrl}  style={{width: '200px'}}/>
          </Popup>
        }
      </Marker>
  )
}

export default PlaceMarker;
