import React, { Component } from 'react';
import { CategoriesConsumer} from '../context/categories-context';


class Form extends Component {
  state = {
    nameEvent: '',
    categoryEvent: ''
  }

  // Si el usuario agrega un evento o categoria
  getEventData = (e) => {
    this.setState({
      // Para que esto funciones el nombre del state tiene que coincidir con el del input
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por Nombre o Categoría
          </legend>
        </fieldset>

        <div className="uk-column-1-3@m uk-margin">
          <div className="uk-margin" uk-margin="true">
            <input
              name="nameEvent"
              className="uk-input"
              type="text"
              placeholder="Nombre de Evento o Ciudad"
              onChange={this.getEventData}
            />
          </div>
            <div className="uk-margin" uk-margin="true">
              <select name="categoryEvent" className="uk-select" onChange={this.getEventData}>
                <option value="">Seleccione Categoría</option>
                <CategoriesConsumer>
                  {/* Aqui adentro es donde se va a tener acceso a los datos de este consumer */}
                  {/* se accede a los valores como value */}
                  { (value) => {
                      return (
                        value.categories.map((categorie) => (
                          <option key={categorie.id} value={categorie.id}>{categorie.name_localized}</option>
                        ))
                      )
                    }
                  }
                </CategoriesConsumer>
              </select>
            </div>

            <div>
              <input type="submit" className="uk-button submit-button" value="Busca Eventos" />
            </div>
        </div>
      </form>
    );
  }
}

export default Form;
