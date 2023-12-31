import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import React, { useRef } from 'react';

const Dobavjiv = () => {

  let blocks = useRef();

  function dobav(e) {
    e.preventDefault();

    const forms = document.getElementById('dobav')

    if (!forms.checkValidity()) {
        e.stopPropagation()
        forms.classList.add('was-validated')
        return}

    var formdata = new FormData(document.getElementById("dobav"));

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/pets", requestOptions)
      .then(response => response.status)
      .then(result => {
        console.log(result);
        if (result == 200) {
          let message = 'Вы успешно выложили объявление!!!';
          blocks.current.innerText = message;
          blocks.current.style.background = "#34C924"
          blocks.current.style.color = "black";
          blocks.current.style.border = "1px solid rgb(19, 136, 8)"
          blocks.current.style.display = 'flex';
        }
      })


      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <Header />

      <form className="contei" id="dobav" noValidate onSubmit={dobav}>
        <label htmlFor="inputA">Ваше имя</label>
        <input type="text" className="form-control" pattern='^[А-Яа-яёЁ\s\-]+$' id="inputA" required name="name" />
        <br />
        <label htmlFor="inputK">Введите номер телефона</label>
        <input type="text" className="form-control" pattern='^[\d\+]{12}$' id="inputK" required name="phone" />
        <br />
        <label htmlFor="inputEmail1">Введите вашу почту</label>
        <input type="email" className="form-control" id="inputEmail1" placeholder="Почта" required name="email" />
          <label htmlFor="exampleFormControlFile1">Выберите файл</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1" accept="image/png" required name="photos1" />
          <br />
          <br />
          <label htmlFor="exampleFormControlFile1">Выберите файл</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile2" accept="image/png" name="photos2" />
          <br />
          <br />
          <label htmlFor="exampleFormControlFile1">Выберите файл</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile3" accept="image/png" name="photos3" />
        <br />
        <br />
        <label htmlFor="inputLast">Клеймо</label>
        <input type="text" className="form-control" id="inputKlich" name="mark" />
        <br />
        <label htmlFor="inputLast">Вид животного</label>
        <input type="text" className="form-control" id="inputVid" required name="kind" />
        <br />
        <label htmlFor="inputLast">Район</label>
        <input type="text" className="form-control" id="inputLast" required name="district" />
        <br />
        <label htmlFor="inputData">Дата нахождения животного</label>
        <input type="date" className="form-control" id="inputData" required name="date" />
        <br />
        <label htmlFor="exampleFormControlTextarea1">Описание</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description"></textarea>
        <br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" required name="confirm" />
          <label className="form-check-label" htmlFor="gridCheck">
            Подтвердите что вы не робот
          </label>
        </div>
        <br />
        <details className="w-100 d-flex flex-column justify-content-center align-items-center">
          <summary className="btn btn-primary w-50 d-flex flex-column justify-content-center align-items-center" style={{ "margin": "auto", "marginbBottom": "20px" }}>
            Зарегистрироваться
          </summary>
          <div className="d-flex flex-column justify-content-center align-items-center w-50" style={{ "margin": "auto" }}>
            <div className="mb-4 w-100">
              <br />
              <input type="password" className="form-control border border-primary" placeholder="Пароль" required name="password" />
            </div>
            <div className="mb-4 w-100">
              <input type="password" className="form-control border border-primary" placeholder="Введите пароль повторно" required name="password_confirmation" />
            </div>
          </div>
        </details>
        <br />
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary">Выложить объявление</button>
        </div>
      </form>
      <div className="alert alert-primary w-50 asda mt-3 " style={{ "display": "none" }} role="alert" ref={blocks}></div>

      <Footer />
    </div>
  )
}

export default Dobavjiv;
