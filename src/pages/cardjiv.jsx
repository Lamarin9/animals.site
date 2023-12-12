import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import img6 from '../images/Pic/cat.jpg';
import React from 'react';

const Cardjiv = () => {
    let cardlich = {FIO: "Игнатьев Никита Олегович", num: "+7 (123) 888-32-52", mail: "NikitkaKrut18@gmail.com", klich: "Базилио",
    kleimo: "Есть", opis: "Кошка, 13 лет, любит рыбу и ненавидет змей."}
    return (
        <div>
            <Header />

            <h1 className="lineReg">Подробности о животном</h1>

<img src={img6} className="picc" alt="..."/>

<div style={{"minHeight":"61vh"}}>
<div className="contei26">
<ul className="list-group list-group-flush">
  <li className="list-group-item">Нашедший: {cardlich.FIO}</li>
  <li className="list-group-item">Номер телефона: {cardlich.num}</li>
  <li className="list-group-item">Почта: {cardlich.mail}</li>
  <li className="list-group-item">Кличка: {cardlich.klich} </li>
  <li className="list-group-item">Клеймо: {cardlich.kleimo} </li>
  <li className="list-group-item">Описание: {cardlich.opis}</li>
</ul>
</div>
</div>


            <Footer />
        </div>
    )
}

export default Cardjiv;