import React from "react";
import PropTypes from "prop-types";

function Event(props){
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.details}</em></p>
      <hr/>
    </React.Fragment>
  );
}




Event.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  details: PropTypes.string
};

export default Event;
