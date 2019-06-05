import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const EventsContext = React.createContext();
// Asi se accede a Consumer
export const EventsConsumer = EventsContext.Consumer;


class EventsProvider extends Component {

  token = 'NLC37RG4EVX2O4QXAGHJ';
  sort ='date'

  getEvents = async (search) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&
                categories=${search.categorie}&sort_by=${this.sort}&token=${this.token}&locale=es_ES`
  }

  render(){
    return (

    );
  }
}

export default EventsProvider;
