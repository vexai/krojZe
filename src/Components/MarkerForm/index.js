import MarkerForm from "./MarkerForm";
import {connect} from "react-redux";
import {fetchPlaces, addPlace} from "../../store/actions/places";

const mapStateToProps = (state, ownProps) => ({
  places : state.places.places
});


const mapDispatchToProps = dispatch => ({
  fetchPlaces: (params) => dispatch(fetchPlaces(params)),
  addPlace: (payload) => dispatch(addPlace(payload)),
});


export default  connect(mapStateToProps, mapDispatchToProps)(MarkerForm);
