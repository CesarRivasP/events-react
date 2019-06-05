import React from 'react';
import Event from './event';
import { EventsConsumer } from '../context/events-context';

const EventsList = () => (
  <div className="uk-child-width-1-3@m" uk-grid="true">
    <h1>Resultados</h1>
    <EventsConsumer>
      {
        (value) => {
          return value.events.map((event) => (
            <Event />
          ))
        }
      }
    </EventsConsumer>
  </div>
);

export default EventsList;
