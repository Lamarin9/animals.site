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
<h2 className="text-center text-white bg-primary m-2">Аутентификация</h2>
        <form className="w-50 g-3 m-auto border p-3 needs-validation" style={{minWidth: "300px"}} onSubmit={auth} noValidate id='form'>

        <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">e-mail</label>
    <input type="email" className="form-control" id="validationCustom01" required onChange={(e)=>setUser({...user, email:e.target.value})} />
    <div className="invalid-feedback">
        Пожалуйста, введите адрес электронной почты
      </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Пароль</label>
    <input type="password" className="form-control" id="validationCustom02" required onChange={(e)=>setUser({...user, password:e.target.value})} />
    <div className="invalid-feedback">
        Пожалуйста, введите пароль
      </div>
  </div>
              <input type="submit" className="btn btn-primary m-3" value="Войти"/>            
        </form>
        <p className='text-danger text-center' id='error' style={{display:'none'}}>Неправилный адрес электронной почты и e-mail</p>
      <p className='text-success text-center' id='success' style={{display:'none'}}>Вы успешно зарегистрировались, ваш токен: {token}</p>
</form>
</div>
      <Footer/>
    </div>
  )
}

export default Voiti;
