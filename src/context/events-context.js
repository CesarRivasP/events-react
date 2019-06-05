import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const EventsContext = React.createContext();
// Asi se accede a Consumer
export const EventsConsumer = EventsContext.Consumer;


class EventsProvider extends Component {
  state = {
    events: []
  }

  token = 'NLC37RG4EVX2O4QXAGHJ';
  sortBy ='date';

  getEvents = async (search) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.nameEvent}&categories=${search.categoryEvent}&sort_by=${this.sortBy}&token=${this.token}&locale=es_ES`;

    // consultar la api con la url
    const events = await axios.get(url);

    this.setState({
      events: events.data.events
    })
  }

  render(){
    return (
      <EventsContext.Provider value={{ events: this.state.events, getEvents: this.getEvents }}>
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
