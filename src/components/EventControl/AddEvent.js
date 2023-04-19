import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function AddEvent(props){

  function handleNewEventFormSubmission(formReturnData) {
    formReturnData.preventDefault();
      props.onNewEventCreation({
        names: formReturnData.target.names.value,
        location: formReturnData.target.location.value,
        details: formReturnData.target.details.value,
        id: v4()
      });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewEventFormSubmission}>
        <input
          type='text'
          name='names' 
          placeholder="What is the bird's name?" />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='details'
          placeholder='Tell us about the Experience~!' />
        <button type='submit'>Create Sighting!</button>
      </form>
    </React.Fragment>
  );
}

AddEvent.propTypes = {
  onNewEventCreation: PropTypes.func
};





export default AddEvent;
