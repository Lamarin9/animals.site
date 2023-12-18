import React from 'react';
import { Link } from "react-router-dom";
import "../components/qqq.css";


const Cards = (props) => {
    return(
  <div className="col">
    <div className="card h-100">
      <img src={'https://pets.сделай.site'+props.data.photos} className="card-img-top wwww" alt="..."/>
      <div className="card-body ft">
          <div>
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">id: {props.data.id}.</p> 
        <p className="card-text">Телефон: {props.data.phone}.</p> 
        <p className="card-text">Вид: {props.data.kind}.</p> 
        <p className="card-text">Описание:{props.data.description} | Чип:{props.data.mark} | Район:{props.data.district} | Дата:{props.data.date}.</p>
      </div>
      <Link to={'/cardjiv/' + props.data.id}>
        <div><button className="btn btn-primary ff" >Подробнее</button></div></Link>
      </div>
    </div>
  </div>
    );
};

export default Cards;