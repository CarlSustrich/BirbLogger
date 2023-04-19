import React from 'react';
import EventList from './EventList';
import EventDetails from './EventDetails';
import AddEvent from './AddEvent';

class EventControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addEventFormVisible: false,
      mainEventList: [],
      currentEventBeingViewed: null
    };
  }
//                               prop v
  handleAddingNewEventToList = (argument) => {
    this.setState(beforeChangesState => ({
      mainEventList: ([...beforeChangesState.mainEventList, argument]),
      addEventFormVisible: false
    }))
  }

  handleViewDetailsRequest = () => {

  }

  handleClick = () => {
    this.setState(fish => ({
      addEventFormVisible: !fish.addEventFormVisible
    }));
  }

  render(){
    let buttonText = null;
    return(
      <React.Fragment>
        <EventList eventList={this.state.mainEventList}/>
        {this.state.addEventFormVisible && 
          <>
            <AddEvent onNewEventCreation={this.handleAddingNewEventToList} />
            <button onClick={this.handleClick}>something</button>
          </>
        }
        {!this.state.addEventFormVisible &&
          <>
            <EventDetails />  
            <button onClick={this.handleClick}>otherthing</button>
          </>
        }
        
      </React.Fragment>
    )
  }

  // render(){
  //   let buttonText = null;
  //   return(
  //     <React.Fragment>
  //       {this.state.addEventFormVisible ? 
  //           (<React.Fragment>      <AddEvent onNewEventCreation={this.handleAddingNewEventToList} /> <button onClick={this.handleClick}>idkthings</button></React.Fragment>      ) : 
  //           (<React.Fragment>    <EventDetails eventDetails={this.state.mainEventList}/>  <button onClick={this.handleClick}>idkotherthings</button></React.Fragment> )
  //       }
  //     </React.Fragment>
  //   )
  // }
}





export default EventControl;
