import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
import "../components/qqq.css";
import React from 'react';

const Vsejiv = () => {
let card = {name: "Гена", raion: "Приморский", date: "22.12.22", kind: "Крокодил"}
let card1 = {name: "Пушкин", raion: "Выборгский", date: "11.10.23", kind: "Рыба"}    
let card2 = {name: "Клава", raion: "Муринский", date: "09.10.23", kind: "Жаба"}
let card3 = {name: "Дамбо", raion: "Адмиралтейский", date: "08.01.23", kind: "Слон"}
let card4 = {name: "Базилио", raion: "Колпинский", date: "15.02.23", kind: "Кот"}
let card5 = {name: "Константин", raion: "Колпинский", date: "14.03.23", kind: "Капибара"}
let card6 = {name: "Ракета", raion: "Петроградский", date: "24.04.22", kind: "Енот"}
let card7 = {name: "Десперо", raion: "Шушарский", date: "21.02.23", kind: "Енот"}
let card8 = {name: "Егор", raion: "Центральный", date: "21.02.23", kind: "Крот"}
    return (
        <div>
            <Header />

            <h1 className="lineReg">Найденные животные</h1>

            <hr className="mt-3 mb-4" />
            <div>
                <div className="w-50 m-auto " >
                    <form className="d-flex but" role="search">
                        <input className="form-control me-2" type="search" placeholder="Введите вид животного" aria-label="Search" />
                    </form>
                </div>

                <div className="w-50 m-auto " >
                    <form className="d-flex but" role="search">
                        <input className="form-control me-2" type="search" placeholder="Введите район" aria-label="Search" />
                    </form>
                </div>

                <div className="w-50 m-auto " >
                    <div className="d-flex justify-content-center align-items-center" >
                        <button type="button" className="btn btn-warning">Сделать поиск</button>
                    </div>
                </div>
            </div>
            <hr className="mt-5 mb-4" />

            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                <Cards data = {card}/>
                <Cards data = {card1}/>
                <Cards data = {card2}/>
                <Cards data = {card3}/>
                <Cards data = {card4}/>
                <Cards data = {card5}/>
                <Cards data = {card6}/>
                <Cards data = {card7}/>
                <Cards data = {card8}/>
            </div>
<br/>
            <Footer />
        </div>
    )
}

export default Vsejiv;