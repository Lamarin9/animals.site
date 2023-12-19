import React from 'react';
import "../components/qqq.css";
import { useNavigate } from 'react-router-dom';


  const Cards = (props) => {

    const navigate = useNavigate();
  
    return (
      <div className="col">
      <div className="card h-100">
        <img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top wwww" alt="..." />
        <div className="card-body ft">
          <div>
          <h5 className="card-title">{props.data.kind}</h5>
          <p className="card-text">id: {props.data.id}</p>
          <p className="card-text">Описание:{props.data.description}</p>
          <li className="list-group-item">Дата: {props.data.date} | Район:{props.data.district}</li>
          </div>
          <button onClick={() => {navigate("/cardjiv", { state: props.data.id })}} className="btn btn-primary ff">Подробнее</button>
      </div>
      </div>
      </div>
    );
  };
  
  export default Cards;
  

