import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import React from 'react';

const Dobavjiv = () => {
    return (
        <div>
            <Header />

            <form class="contei">
    <label for="inputA">Ваше имя</label>
    <input type="text" class="form-control" id="inputA" required/>
    <br/>
    <label for="inputK">Введите номер телефона</label>
    <input type="text" class="form-control" id="inputK" required/>
    <br/>
    <label for="inputEmail1">Введите вашу почту</label>
    <input type="email" class="form-control" id="inputEmail1" placeholder="Почта" required/>
    <br/>
        <div class="form-group">
          <label for="exampleFormControlFile1">Выберите файл</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" required/>
        </div>
        <br/>
        <div class="form-group">
          <label for="exampleFormControlFile1">Выберите файл</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </div>
        <br/>
        <div class="form-group">
          <label for="exampleFormControlFile1">Выберите файл</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </div>
    <br/>
    <label for="inputLast">Клеймо</label>
    <input type="text" class="form-control" id="inputKlich"/>
    <br/>
    <label for="inputLast">Вид животного</label>
    <input type="text" class="form-control" id="inputKlich"/>
    <br/>
    <label for="inputLast">Район</label>
    <input type="text" class="form-control" id="inputKlich"/>
    <br/>
    <label for="inputLast">Дата нахождения животного</label>
    <input type="date" class="form-control" id="inputKlich"/>
    <br/>
    <label for="exampleFormControlTextarea1">Описание</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <br/>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck"/>
        <label class="form-check-label" for="gridCheck">
          Подтвердите что вы не робот
        </label>
      </div>
      <br/>
      <details class="w-100 d-flex flex-column justify-content-center align-items-center">
        <summary class="btn btn-primary w-50 d-flex flex-column justify-content-center align-items-center" style={{"margin": "auto", "margin-bottom": "20px"}}>
          Зарегистрироваться
        </summary>
        <div class = "d-flex flex-column justify-content-center align-items-center w-50" style={{"margin": "auto"}}>
        <div class="mb-4 w-100">
          <input type="text" class="form-control border border-primary" placeholder="Email" required/>
        </div>
          <div class="mb-4 w-100">
          <input type="password" class="form-control border border-primary" placeholder="Пароль" required/>
          </div>
          <div class="mb-4 w-100">
          <input type="password" class="form-control border border-primary" placeholder="Введите пароль повторно" required/>
          </div>
        </div>
      </details>
    <br/>
    <div class="d-flex justify-content-center align-items-center">
    <button type="submit" class="btn btn-primary">Выложить объявление</button>
</div>
  </form>

            <Footer />
        </div>
    )
}

export default Dobavjiv;
