import "../components/qqq.css";
import React from 'react';
import img3 from '../images/Pic/sddefault.jpg';

const Slider = () => {
    return (
        <div>
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="news">Голубь гопник(Найден 13.04.23)</h5>
                <p className="news">Пропавший 11.01.22 голубь вернулся домой</p>
              </div>
            </div>
          </div> 

    )
}

export default Slider;