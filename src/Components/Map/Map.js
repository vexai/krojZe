import React, { useEffect} from "react";
import {Map as LeafletMap, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import PlaceMarker from "../../Components/PlaceMarker";

delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Map = ({places, fetchPlaces, selectedId}) => {

  useEffect(() => {
    fetchPlaces();
  }, [])

  const position = [50.0507039, 19.8819405];

  return (
      <div>
        <LeafletMap center={position} zoom={13} style={{height: '400px', marginTop: '100px'}}>
          <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Object.keys(places).map((key,index) => <PlaceMarker lat={places[key].lat}
                                                       lng={places[key].lng} title={places[key].title}
                                                       imageUrl={places[key].imageUrl}
                                                       id={index}
                                                       open={selectedId === key}
                                                       description={places[key].description}/>)}
        </LeafletMap>
      </div>
  )
}

export default Map;
