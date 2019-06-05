import React, { Fragment } from 'react';
import Header from './components/header';
import CategoriesProvider from './context/categories-context';


function App() {
  return (
    <CategoriesProvider>
      <Header />
    </CategoriesProvider>
  );
}

export default App;
