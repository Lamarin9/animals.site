import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Cards from "../components/cards";
import "../components/qqq.css";
import React from 'react';

const Main = () => {
let card = {name: "Гена", raion: "Приморский", date: "22.12.22", kind: "Крокодил"}
let card1 = {name: "Пушкин", raion: "Выборгский", date: "11.10.23", kind: "Рыба"}
let card2 = {name: "Клава", raion: "Муринский", date: "09.10.23", kind: "Жаба"}
let card3 = {name: "Дамбо", raion: "Адмиралтейский", date: "08.01.23", kind: "Слон"}
let card4 = {name: "Базилио", raion: "Колпинский", date: "15.02.23", kind: "Кот"}
let slider = {name: "Голубь", date: "13.04.23", dateprop: "11.01.22",}
let slider2 = {name: "Детёныш носорога и капибары", date: "30.11.23", dateprop: "24.11.23",}
let slider3 = {name: "Корова смотритель", date: "13.12.22", dateprop: "22.05.23 "}
  return (
    <div>
      <Header />
      <div className="line">Нашлись хозяева!</div>

      <div className="cont">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-rise="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <Slider data = {slider}/>
            <Slider data = {slider2}/>
            <Slider data = {slider3}/>
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



      <div className="line">Свежие объявления!</div>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <Cards data = {card} />
        <Cards data = {card1} />
        <Cards data = {card2} />
        <Cards data = {card3} />
        <Cards data = {card4} />
      </div>
      <div className="line1">Обратная связь если вы видели животное!</div>

      <form className="w-50 m-auto p-3" style={{ "minWidth": "300px" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Укажите вашу почту для связи с вами</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Ваши данные полностью конфиденциальны.</div>
        </div>

        <button type="submit" className="btn btn-primary">Отправить почту нам</button>
      </form>
      <Footer />
    </div>
  )
}

export default Main;
