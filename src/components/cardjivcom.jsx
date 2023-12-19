import React from 'react';
import "../components/qqq.css";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Cardjivcom = (props) => {

  const location = useLocation();
  const [card, setCard] = useState([]);

  const request = () => {
      var myHeaders = new Headers();

      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
      };

      fetch(`https://pets.сделай.site/api/pets/${location.state}`, requestOptions)
          .then(response => response.json())
          .then(result => {
              console.log(location.state);
              console.log(result);
              if ('data' in result) {
                  setCard(result.data.pet);
              }

          })
          .catch(error => console.log('error', error));
  }
  useEffect(request, []);

  return (
      <div>
          <div style={{ "minHeight": "82vh" }} className='wwd' >
          <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <img src={'https://pets.сделай.site' + card.photos1} className="card-img-top" alt="..." />
        <div className="card-body ft">
          <div>
          <h5 className="card-title">{card.kind}</h5>
          <hr/>
          <p className="card-text">id: {card.id}</p>
          <hr/>
          <p className="card-text">Описание: {card.description}</p>
          <hr/>
          <p className="list-group-item">Район:{card.district} | Клеймо: {card.mark}</p>
          <hr/>
          </div>
                  </div>
              </div>
          </div>
      </div>
  );
}


export default Cardjivcom;
