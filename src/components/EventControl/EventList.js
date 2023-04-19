import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';


function EventList(props){
  return (
    <React.Fragment>
      <hr/>
      <h1> eventlist</h1>
      {props.eventList.map((fish, index) =>
        <Event names={fish.names}
          location={fish.location}
          details={fish.details}
          key={index}/>
      )}
    </React.Fragment>
  );

}
// Add propTypes for ticketList.
EventList.propTypes = {
  eventList: PropTypes.array
};

export default EventList;
