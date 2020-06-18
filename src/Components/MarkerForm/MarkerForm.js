import React, {useState, useEffect, useRef} from "react";
import L from 'leaflet';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {debounce} from "lodash"
import {uuidv4} from './../../utlis/uuidv4'
import firebase from './../../firebase/Firebase'
import '@firebase/storage';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const MarkerForm = ({addPlace}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState([]);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const provider = new OpenStreetMapProvider();
  const inputImage = useRef(null);

  const searchResults = async () => {
    const results = await provider.search({query})
    const newOptions = results && results.map((result, index) => {
      return {value: index, label: result.label, lat: result.x, lng: result.y}
    })
    newOptions && setOptions(newOptions)
    ;
  };

  useEffect(() => {
    searchResults();
  }, [query]);

  const validate = () => {
    setError('');
    !(inputImage.current && inputImage.current.files.length) && setError('dodaj zdjęcie')
    !description && setError('dodaj krótki opis')
    !title && setError('dodaj tytuł')
    !selectedOption && setError('wybierz adres z listy')
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setOptions([]);
  }

  const handleSearchAddress = debounce(text => {
    setQuery(text)
  }, 1000);

  useEffect(() => {
    validate();
      }
      , [selectedOption, description, title]
  );



  const handleSubmit = async () =>{

    var storageRef = firebase.storage().ref();
    var imageRef = storageRef.child( uuidv4()+'_'+inputImage.current.files[0].name);

    var file = inputImage.current.files[0];
   await imageRef.put(file);
   const imageUrl = await  imageRef.getDownloadURL();
    addPlace({ title, description,lat: selectedOption.lat, lng:selectedOption.lng, imageUrl})
  }

  return (
      <div>
        <div style={{fontSize: '50px'}}>{error}</div>
        <div>Wyszukaj adres i wybierz z listy</div>
        <input onChange={e => handleSearchAddress(e.target.value)} type={'text'}/>
        {options.map(option => <div style={{cursor: 'pointer', lineHeight: '60px'}} onClick={() => handleOptionSelect(option)}>{option.label}</div>)}
        <div>tytuł</div>
        <input onChange={e => setTitle(e.target.value)} type={'text'}/>
        <div>opis</div>
        <input onChange={e => setDescription(e.target.value)} type={'text'}/>
        <div>zdjęcie</div>
        <input accept="image/png, image/jpeg" ref={inputImage} onChange={()=>validate()} type={'file'}/>
        <input  disabled={error} onClick={handleSubmit} type={'submit'}/>
      </div>
  )
}

export default MarkerForm;
