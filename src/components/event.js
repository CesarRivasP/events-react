import React from 'react';

const Event = ({event}) => {
  // extraer el texto
  let { text } = event.description;

  if(text){
    if(text.length > 250){
      text = text.substr(0, 250)
    }
  }
  else {
    text = null;
  }

  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {
            event.logo &&
            <img src={event.logo.url} alt={event.name} />
          }
        </div>

        <div className="uk-card-body">
          <h3 className="uk-card-title">
            {event.name.text}
          </h3>
          <p className="description-event">
            { text }
          </p>
        </div>

        <div className="uk-card-footer">
          <a target="_blank" rel="noopener noreferrer" href={event.url} className="uk-button info-button">Mas Información</a>
        </div>
      </div>
    </div>
  );
}

export default Event;
