import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { debounce } from "lodash";
import { uuidv4 } from "./../../utlis/uuidv4";
import firebase from "./../../firebase/Firebase";
import "@firebase/storage";
import { NavLink } from "react-router-dom";

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
    !selectedOption && setError("Wpisz adres");
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

  const clearInputs = () => {
    for (const userInput of userInputs) {
      userInput.value = "";
    }
    chooseSpanText.innerHTML = "Nie wybrano pliku";
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

  const chooseSpanText = document.getElementById("span-text__choose");
  const chooseInput = document.getElementById("input__choose");
  const handleChooseBtn = () => {
    chooseInput.click();
  };

  const handleChangeText = () => {
    if (chooseInput.value) {
      chooseSpanText.innerHTML = chooseInput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
      chooseSpanText.innerHTML = "Nie wybrano pliku";
    }
  };

  return (
    <>
      <div id="backdrop" onClick={closeModalHandler}></div>
      <div className="modal card" id="add-modal">
        <div class="modal__content">
          <div className="modal__text">
            <h3>Dziękujemy za wysłanie zdjęcia.</h3>
            <p style={{ fontSize: "12.5px" }}>Wkrótce zobaczysz je na mapie!</p>
          </div>
          {/* <img className="modal__img" src={modalImg} alt="ModalImg" /> */}
          <button className="modal__close-btn" onClick={closeModalHandler}>
            Zamknij
          </button>
        </div>
      </div>

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
        <div style={{ display: "block", margin: "auto" }}>
          <div className="map__form-autocomplete">
            {options.map((option) => (
              <div className="form-autocomplete__single" onClick={() => handleOptionSelect(option)}>
                {" - "}
                {option.label}
              </div>
            ))}
          </div>
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
        <input
          id="input__choose"
          className="clear"
          accept="image/png, image/jpeg"
          ref={inputImage}
          onChange={() => {
            validate();
            handleChangeText();
          }}
          type={"file"}
        />
        <div className="map__form-choose-btn">
          <button id="button__choose" onClick={() => handleChooseBtn()}>
            <svg
              width="2.5em"
              height="2.5em"
              viewBox="0 -2 18 18"
              class="bi bi-images"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.002 4h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-10-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-10z"
              />
              <path d="M10.648 8.646a.5.5 0 0 1 .577-.093l1.777 1.947V14h-12v-1l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z" />
              <path
                fill-rule="evenodd"
                d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM4 2h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1z"
              />
            </svg>
          </button>
          <span id="span-text__choose">Nie wybrano pliku</span>
        </div>
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
      <footer>
        <div className="footer__grid1">
          <div className="footer__title">Krój_że</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/kontakt">
            Kontakt
          </NavLink>
          <NavLink className="footer__link" exact to="/">
            O projekcie
          </NavLink>
        </div>
        <div className="footer__grid2">
          <div className="footer__title">Kroje</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/kroje">
            Pobierz
          </NavLink>
        </div>
        <div className="footer__grid3">
          <div className="footer__title">Mapa</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/mapa">
            Archiwum
          </NavLink>
          <NavLink className="footer__link" exact to="/mapa">
            Dodaj zdjęcie
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default MarkerForm;
