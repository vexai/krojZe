import MarkerList from "./MarkerList";
import {connect} from "react-redux";
import {fetchPlaces, addPlace} from "../../store/actions/places";

const mapStateToProps = (state, ownProps) => ({
  places : state.places.places
});


const mapDispatchToProps = dispatch => ({
  fetchPlaces: (params) => dispatch(fetchPlaces(params)),
});


export default  connect(mapStateToProps, mapDispatchToProps)(MarkerList);
