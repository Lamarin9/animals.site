import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import React from 'react';

const Registracia = () => {
  return (
    <div>
      <Header />
      
      <h1 className="lineReg">Регистрация аккаунта</h1>

      <form className="contei">
        <label htmlFor="inputFIO">ФИО</label>
        <input type="email" className="form-control" id="inputFIO" placeholder="Фамилия Имя Отчество" required/>
        <br/>
            <label htmlFor="inputEmail4">Введите вашу почту</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Почта" required/>
            <br/>
            <label htmlFor="inputPassword4">Введите ваш пароль</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Пароль" required/>
            <br/>
            <label htmlFor="inputPassword5">Подтвердите пароль</label>
            <input type="password" className="form-control" id="inputPassword5" placeholder="Пароль" required/>
            <br/>
          <label htmlFor="inputAddress">Введите ваш адрес</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Улица, дом, корпус, квартира" required/>
          <br/>
            <label htmlFor="inputCity">Город</label>
            <input type="text" className="form-control" id="inputCity" required/>
            <br/>
          <label htmlFor="inputCity">Номер телефона</label>
          <input type="text" className="form-control" id="inputNum" placeholder="+7 (777) 777-77-77" required/>
          <br/>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
            <label className="form-check-label" htmlFor="gridCheck">
              Подтвердите что вы не робот
            </label>
          </div>
          <br/>
        <button type="submit" className="btn btn-primary">Создать аккаунт</button>
      </form>
      <Footer className="foot"/>
    </div>
  )
}

export default Registracia;
