import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import img6 from '../images/Pic/cat.jpg';
import React from 'react';

const Cardjiv = () => {
    return (
        <div>
            <Header />

            <h1 className="lineReg">Подробности о животном</h1>

<img src={img6} className="picc" alt="..."/>

<div style={{"minHeight":"61vh"}}>
<div className="contei26">
<ul className="list-group list-group-flush">
  <li className="list-group-item">Хозяин: Никита Игнатьев</li>
  <li className="list-group-item">Номер телефона: +7 (123) 888-32-52</li>
  <li className="list-group-item">Почта: NikitkaKrut18@gmail.com</li>
  <li className="list-group-item">Кличка: Базилио </li>
  <li className="list-group-item">Клеймо: есть </li>
  <li className="list-group-item">Описание: Кошка, 13 лет, любит рыбу и ненавидет змей.</li>
</ul>
</div>
</div>


            <Footer />
        </div>
    )
}

export default Cardjiv;