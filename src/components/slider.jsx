import "../components/qqq.css";
import React from 'react';
import img3 from '../images/Pic/sddefault.jpg';

const Slider = () => {
    return (
        <div>
      <div className="cont">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="news">Голубь гопник(Найден 13.04.23)</h5>
                <p className="news">Пропавший 11.01.22 голубь вернулся домой</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="news">Детёныш носорога и капибары(Найден 30.11.23)</h5>
                <p className="news">Пропавший 24.11.23 детёныш вернулся в зоопарк</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="news">Корова смотритель (Найдена 13.12.22)</h5>
                <p className="news">Пропавшая 22.05.23 корова сама нашла дорогу домой</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
    </div>
        </div>
    )
}

export default Slider;