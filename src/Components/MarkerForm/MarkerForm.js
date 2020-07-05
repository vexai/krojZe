import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { SearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { debounce } from "lodash";
import { uuidv4 } from "./../../utlis/uuidv4";
import firebase from "./../../firebase/Firebase";
import "@firebase/storage";
import TypoJpg from "./typo.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MarkerForm = ({ addPlace }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const provider = new OpenStreetMapProvider({});
  const inputImage = useRef(null);

  const searchResults = async () => {
    const results = await provider.search({ query });
    const newOptions =
      results &&
      results.map((result, index) => {
        return { value: index, label: result.label, lat: result.x, lng: result.y };
      });
    newOptions && setOptions(newOptions);
  };

  useEffect(() => {
    searchResults();
  }, [query]);

  const validate = () => {
    setError("");
    !(inputImage.current && inputImage.current.files.length) && setError("Dodaj zdjęcie");
    !description && setError("Dodaj krótki opis");
    !title && setError("Dodaj tytuł");
    !selectedOption && setError("Wybierz adres z listy");
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setQueryInput(option.label);
    setOptions([]);
  };

  const handleSearchAddress = debounce(() => {
    setQuery(queryInput);
  }, 1000);

  useEffect(() => {
    validate();
  }, [selectedOption, description, title]);

  const handleSubmit = async () => {
    var storageRef = firebase.storage().ref();
    var imageRef = storageRef.child(uuidv4() + "_" + inputImage.current.files[0].name);

    var file = inputImage.current.files[0];
    await imageRef.put(file);
    const imageUrl = await imageRef.getDownloadURL();
    addPlace({ title, description, lat: selectedOption.lat, lng: selectedOption.lng, imageUrl });
  };

  //modal and clear form

  const modal = document.getElementById("add-modal");
  const backdrop = document.getElementById("backdrop");
  const userInputs = document.querySelectorAll(".clear");
  const mdlSubmit = document.getElementById("submit-modal");

  const clearInputs = () => {
    for (const userInput of userInputs) {
      userInput.value = "";
    }
  };

  const showModal = () => {
    modal.classList.add("visible");
    toggleBackdrop();
  };

  const closeModal = () => {
    modal.classList.remove("visible");
  };

  const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
  };

  const closeModalHandler = () => {
    closeModal();
    toggleBackdrop();
    clearInputs();
  };

  return (
    <>
      <div className="map__form map__marker-form">
        <div className="map__form-header">{error}</div>
        <input
          placeholder="Wpisz poprawny adres..."
          className="map__form-inputs clear"
          value={queryInput}
          onKeyUpCapture={handleSearchAddress}
          onChange={(e) => setQueryInput(e.target.value)}
          type={"text"}
        />
        <div className="map__form-autocomplete">
          {options.map((option) => (
            <div
              className="form-autocomplete__single"
              style={{ cursor: "pointer", lineHeight: "30px" }}
              onClick={() => handleOptionSelect(option)}
            >
              {" - "}
              {option.label}
            </div>
          ))}
        </div>
        <input
          placeholder="Tytuł..."
          className="map__form-inputs clear"
          onChange={(e) => setTitle(e.target.value)}
          type={"text"}
        />
        <input
          placeholder="Opis..."
          className="map__form-inputs clear"
          onChange={(e) => setDescription(e.target.value)}
          type={"text"}
        />
        <div className="map__form-choose">Wybierz zdjęcie...</div>
        <input
          className="map__form-choose-btn clear"
          accept="image/png, image/jpeg"
          ref={inputImage}
          onChange={() => validate()}
          type={"file"}
        />
        <input
          placeholder="Prześlij..."
          className="map__form-submit-btn"
          disabled={error}
          onClick={() => {
            handleSubmit();
            showModal();
          }}
          type={"submit"}
        />
      </div>
      <button onClick={showModal}>MODAL</button>
      <div id="backdrop" onClick={closeModalHandler}></div>
      <div className="modal card" id="add-modal">
        <div class="modal__content">
          <div className="modal__text">
            <h4>Dziękujemy za wysłanie zdjęcia.</h4>
            <p>Jeżeli spełnia warunki to wkrótce zobaczysz je na mapie!</p>
          </div>
          <img className="modal__img" src={TypoJpg} />
          <button className="modal__close-btn" onClick={closeModalHandler}>
            Zamknij
          </button>
        </div>
      </div>
    </>
  );
};

export default MarkerForm;
