import Header from "../components/header";
import Footer from "../components/footer";
import Cardslich from "../components/cardslich";
import "../components/qqq.css";
import React from 'react';
import img5 from '../images/Pic/Tambi.jpg';

const Lichkab = () => {
    let person = {FIO: "Тамби Масаев Мухамедович", city: "Санкт-Петербург", Mail: "TambiTop@mail.ru", num: "+7 (800) 555-35-35",
     day: "152",
     street: "Ленина", home: "15",
     korpuc: "1", flat: "455"}
     let cardlich = {name: "Джейк", status: "На модерации", raion: "Выборгский", date: "14.08.23", kind: "Броненосец"}
    return (
        <div>
            <Header />

            <h1 className="lineReg">Личный кабинет</h1>

            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src={img5} alt="avatar" className="rounded-circle img-fluid" style={{ "width": "150px" }} />
                                    <h5 className="my-3">{person.FIO}</h5>
                                    <p className="text-muted mb-4">Город: {person.city}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">ФИО</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{person.FIO}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Почта</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{person.mail}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Номер телефона</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{person.num}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Адрес</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Ул. {person.street}, д. {person.home}, к. {person.korpuc}, кв. {person.flat}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Кол-во дней на сайте:</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{person.day}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary ff izmena1" >Выйти из аккаунта</button>
                            <button type="button" className="btn btn-primary izmena" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                Изменить данные
                            </button>
                            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Изменение данных</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <label htmlFor="inputFIO">ФИО</label>
                                                <input type="email" className="form-control" id="inputFIO" placeholder="Фамилия Имя Отчество" required />
                                                <br />
                                                <label htmlFor="inputEmail4">Введите вашу почту</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Почта" required />
                                                <br />
                                                <label htmlFor="inputPassword4">Введите ваш пароль</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="Пароль" required />
                                                <br />
                                                <label htmlFor="inputPassword5">Подтвердите пароль</label>
                                                <input type="password" className="form-control" id="inputPassword5" placeholder="Пароль" required />
                                                <br />
                                                <label htmlFor="inputAddress">Введите ваш адрес</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="Улица, дом, корпус, квартира" required />
                                                <br />
                                                <label htmlFor="inputCity">Город</label>
                                                <input type="text" className="form-control" id="inputCity" required />
                                                <br />
                                                <label htmlFor="inputCity">Номер телефона</label>
                                                <input type="text" className="form-control" id="inputNum" placeholder="+7 (777) 777-77-77" required />
                                                <div className="form-check"></div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                            <button type="button" className="btn btn-primary">Сохранить изменения</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="line">Личные Объявления</div>

            <Cardslich data = {cardlich}/>

            <div className="line3">Всего объявление: 1; Найденных хозяев: 0;</div>

            <Footer />
        </div>
    )
}

export default Lichkab;
