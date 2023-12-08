import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
import "../components/qqq.css";
import img6 from '../images/Pic/cat.jpg';
import React from 'react';

const Cardjiv = () => {
    return (
        <div>
            <Header />

            <h1 class="lineReg">Подробности о животном</h1>

<img src={img6} class="picc" alt="..."/>

<div style={{"minHeight":"61vh"}}>
<div class="contei26">
<ul class="list-group list-group-flush">
  <li class="list-group-item">Хозяин: Никита Игнатьев</li>
  <li class="list-group-item">Номер телефона: +7 (123) 888-32-52</li>
  <li class="list-group-item">Почта: NikitkaKrut18@gmail.com</li>
  <li class="list-group-item">Кличка: Базилио </li>
  <li class="list-group-item">Клеймо: есть </li>
  <li class="list-group-item">Описание: Кошка, 13 лет, любит рыбу и ненавидет змей.</li>
</ul>
</div>
</div>


            <Footer />
        </div>
    )
}

export default Cardjiv;