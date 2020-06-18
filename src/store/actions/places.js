import '@firebase/storage';
import {uuidv4} from './../../utlis/uuidv4';
import firebase from './../../firebase/Firebase'

export const SET_PLACES = 'SET_PLACES';
export const ADD_PLACE = 'ADD_PLACE';

export const fetchPlaces = () => {
  return async dispatch => {
    try {
      const data = (await firebase.database().ref(`places/`).once('value')).val();

      dispatch({type: SET_PLACES, places: data});
    } catch (e) {
      throw e;
    }
  };
};

export const addPlace = (payload) => {
  return async () => {
    const {description, title, lat, lng, imageUrl} = payload;
    try {
      await firebase.database().ref(`places/${uuidv4()}_place`).set({
        title,  description, lat, lng, imageUrl, public: false
      });
    } catch (e) {
      throw e;
    }
  };
};

