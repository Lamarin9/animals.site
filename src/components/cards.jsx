import React from 'react';
import img2 from '../images/Pic/croco.jpg';

const Cards = () => {
    return(
  <div className="col">
    <div className="card h-100">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body ft">
          <div>
        <h5 className="card-title">Гена</h5>
        <p className="card-text">Район: Приморский. Найден: 22.12.22 Вид: Крокодил.</p>
      </div>
        <div><button onclick="location.href='#'" className="btn btn-primary ff" >Подробнее</button></div>
      </div>
    </div>
  </div>
    );
};

export default Cards;