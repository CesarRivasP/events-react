import React from 'react';
import Event from './event';
import { EventsConsumer } from '../context/events-context';

const EventsList = () => (
  <div className="uk-child-width-1-3@m" uk-grid="true">
    <EventsConsumer>
      {
        (value) => {
          return value.events.map((event) => (
            <Event key={event.id} event={event}/>
          ))
        }
      }
    </EventsConsumer>
  </div>
);

export default EventsList;
