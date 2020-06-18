import {
  SET_PLACES,
  ADD_PLACE
} from '../actions/places';
import React from "react";

const initialState = {
  places: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {...state, places: action.places};
    case ADD_PLACE:
      return {...state, places: [...state.places].concat(action.place)};
    default:
      return state;
  }
};

export default placesReducer;
