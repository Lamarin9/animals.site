import React from 'react';
import img2 from '../images/Pic/croco.jpg';
import { Link } from "react-router-dom";
import "../components/qqq.css";


const Cards = (props) => {
    return(
  <div className="col">
    <div className="card h-100">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body ft">
          <div>
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">Район: {props.data.raion}. Найден:  {props.data.date}. Вид: {props.data.kind}.</p>
      </div>
      <Link to={'/cardjiv'}>
        <div><button className="btn btn-primary ff" >Подробнее</button></div></Link>
      </div>
    </div>
  </div>
    );
};

export default Cards;