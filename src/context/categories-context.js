// ESte archivo va a consumir las categorias desde la api
import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriesContext = React.createContext();
// Asi se accede a Consumer
export const CategoriesConsumer = CategoriesContext.Consumer;


class CategoriesProvider extends Component {

  state = {
    categories: []
  }

  token = 'NLC37RG4EVX2O4QXAGHJ';

  componentDidMount(){
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    let categories = await axios.get(url);

    this.setState({
      categories: categories.data.categories
    })
  }

  render(){
    return (
      <CategoriesContext.Provider // Asi se accede a provider
        value={{ categories: this.state.categories }} //state inicial
      >
        { this.props.children } {/* para que pueda comunicar los datos que posee el provider */}
      </CategoriesContext.Provider>
    );
  }
}
export default CategoriesProvider;
