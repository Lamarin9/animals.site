import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import React, { useRef, useState } from 'react';

const Registracia = () => {
  let [user, setUser] = useState({ password: "" });
  let blocks = useRef();

  function reg(e) {
    e.preventDefault();

    const forms = document.getElementById('registr')

    if (!forms.checkValidity()) {
      e.stopPropagation()
      forms.classList.add('was-validated')
      return
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(user);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/register", requestOptions)
      .then(response => response.status)
      .then(result => {
        console.log(result);
        if (result == 204) {
          let message = 'Вы успешно зарегистрировались!!!';
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

      <h1 className="lineReg">Регистрация аккаунта</h1>

      <div style={{ "minHeight": "67vh" }}>
        <form className="contei6" noValidate onSubmit={reg} id='registr'>
          <label htmlFor="inputFIO">ФИО</label>
          <input type="text" className="form-control" id="inputFIO" placeholder="Фамилия Имя Отчество" pattern='^[А-Яа-яёЁ\s\-]+$' required onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <div className="invalid-feedback">
            Введите имя используя кириллицу, пробелы и тире
          </div>
          <br />
          <label htmlFor="inputNum">Номер телефона</label>
          <input type="" className="form-control" id="inputNum" pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}' required onChange={(e) => setUser({ ...user, phone: e.target.value })} />
          <div className="invalid-feedback">
            Введите номер телефона использвуя + и цифры без пробела
          </div>
          <br />
          <label htmlFor="inputEmail4">Введите вашу почту</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Почта" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <br />
          <label htmlFor="inputPassword4">Введите ваш пароль</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Пароль" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' required onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <div className="invalid-feedback">
            Латинские буквы обязательно одна заглавная, строчная и цифра, минимум 7 символов
          </div>
          <br />
          <label htmlFor="inputPassword5">Подтвердите пароль</label>
          <input type="password" className="form-control" id="inputPassword5" placeholder="Пароль" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' required onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })} />
          <div className="invalid-feedback">
            Латинские буквы обязательно одна заглавная, строчная и цифра, минимум 7 символов
          </div>
          <br />
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required onChange={(e) => setUser({ ...user, confirm: e.target.value })} />
            <label className="form-check-label" htmlFor="gridCheck">
              Подтвердите что вы не робот
            </label>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Создать аккаунт</button>
        </form>
        <div className="alert alert-primary w-50 asda mt-3" style={{ "display": "none" }} role="alert" ref={blocks}></div>
      </div>
      <Footer className="foot" />
    </div>
  )
}

export default Registracia;
