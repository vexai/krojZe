import React, {useState} from 'react';
import '../App.scss';
import Map from "./Map";
import MarkerForm from "./MarkerForm";
import MarkerList from "./MarkerList";

function Mapa() {
  const [selectedId, setSelectedId] = useState('');
  return (
      <div>
        <Map selectedId={selectedId}/>
        <MarkerForm/>
        <MarkerList onSelect={setSelectedId}/>
      </div>
  );
}

export default Mapa;
