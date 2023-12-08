import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import React from 'react';

const Voiti = () => {
  return (
    <div>
      <Header/>

      <h1 className="lineReg">Вход в аккаунт</h1>
<div style={{"minHeight":"58vh"}}>
<form className="contei1" >
  <label htmlFor="inputEmail1">Введите вашу почту</label>
  <input type="email" className="form-control" id="inputEmail1" placeholder="Почта" required/>
      <br/>
      <label htmlFor="inputPassword2">Введите ваш пароль</label>
      <input type="password" className="form-control" id="inputPassword2" placeholder="Пароль" required/>
      <br/>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Подтвердите что вы не робот
      </label>
    </div>
    <br/>
  <button onclick="location.href='qwe4.html'" className="btn btn-primary" >Войти в аккаунт</button>
</form>
</div>
      <Footer/>
    </div>
  )
}

export default Voiti;
