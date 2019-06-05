import React, { Fragment } from 'react';
import Header from './components/header';
import Form from './components/form';
import EventsList from './components/events-list';
import CategoriesProvider from './context/categories-context';
import EventsProvider from './context/events-context';


function App() {
  return (
    <Fragment>
      <Header />

      <EventsProvider>
        <CategoriesProvider>
          <div className="uk-container">
            <Form />
            <EventsList />
          </div>
        </CategoriesProvider>
      </EventsProvider>
    </Fragment>
    );
}

export default App;
