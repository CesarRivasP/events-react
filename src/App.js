import React, { Fragment } from 'react';
import Header from './components/header';
import Form from './components/form';
import CategoriesProvider from './context/categories-context';


function App() {
  return (
    <CategoriesProvider>
      <Header />
      <div className="uk-container">
        <Form />
      </div>
    </CategoriesProvider>
  );
}

export default App;
