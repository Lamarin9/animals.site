import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import React from 'react';

const Dobavjiv = () => {
    return (
        <div>
            <Header />

            <form className="contei">
    <label htmlFor="inputA">Ваше имя</label>
    <input type="text" className="form-control" id="inputA" required/>
    <br/>
    <label htmlFor="inputK">Введите номер телефона</label>
    <input type="text" className="form-control" id="inputK" required/>
    <br/>
    <label htmlFor="inputEmail1">Введите вашу почту</label>
    <input type="email" className="form-control" id="inputEmail1" placeholder="Почта" required/>
    <br/>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Выберите файл</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1" required/>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Выберите файл</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile2"/>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Выберите файл</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile3"/>
        </div>
    <br/>
    <label htmlFor="inputLast">Клеймо</label>
    <input type="text" className="form-control" id="inputKlich"/>
    <br/>
    <label htmlFor="inputLast">Вид животного</label>
    <input type="text" className="form-control" id="inputVid"/>
    <br/>
    <label htmlFor="inputLast">Район</label>
    <input type="text" className="form-control" id="inputLast"/>
    <br/>
    <label htmlFor="inputData">Дата нахождения животного</label>
    <input type="date" className="form-control" id="inputData"/>
    <br/>
    <label htmlFor="exampleFormControlTextarea1">Описание</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <br/>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck"/>
        <label className="form-check-label" htmlFor="gridCheck">
          Подтвердите что вы не робот
        </label>
      </div>
      <br/>
      <details className="w-100 d-flex flex-column justify-content-center align-items-center">
        <summary className="btn btn-primary w-50 d-flex flex-column justify-content-center align-items-center" style={{"margin": "auto", "marginbBottom": "20px"}}>
          Зарегистрироваться
        </summary>
        <div className = "d-flex flex-column justify-content-center align-items-center w-50" style={{"margin": "auto"}}>
        <div className="mb-4 w-100">
          <input type="text" className="form-control border border-primary" placeholder="Email" required/>
        </div>
          <div className="mb-4 w-100">
          <input type="password" className="form-control border border-primary" placeholder="Пароль" required/>
          </div>
          <div className="mb-4 w-100">
          <input type="password" className="form-control border border-primary" placeholder="Введите пароль повторно" required/>
          </div>
        </div>
      </details>
    <br/>
    <div className="d-flex justify-content-center align-items-center">
    <button type="submit" className="btn btn-primary">Выложить объявление</button>
</div>
  </form>

            <Footer />
        </div>
    )
}

export default Dobavjiv;
