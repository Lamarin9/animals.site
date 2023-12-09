import "../components/qqq.css";
import React from 'react';
import img3 from '../images/Pic/sddefault.jpg';

const Slider = (props) => {
    return (
        <div>
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="news">{props.data.name}(Найден: {props.data.date})</h5>
                <p className="news">Пропавший {props.data.dateprop} {props.data.name} вернулся домой</p>
              </div>
            </div>
          </div> 

    )
}

export default Slider;