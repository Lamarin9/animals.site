import React from 'react';
import "../components/qqq.css";
import img from '../images/Pic/Logo.png';
import { Link } from "react-router-dom";

const Header = () => {
<<<<<<< HEAD
    return(
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to={'/'}> <img src={img} className="Logo" alt="..."/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page">Главная</Link>
          </li>
          <li className="nav-item">
            <Link to={'/dobavjiv'} className="nav-link">Сообщить о нахождении</Link>
          </li>
          <li className="nav-item">
            <Link to={'/vsejiv'} className="nav-link">Поиск животных</Link>
          </li>
          <li className="nav-item">
            <Link to={'/registracia'} className="nav-link">Регистрация</Link>
          </li>
          <li className="nav-item">
            <Link to={'/Voiti'} className="nav-link">Вход</Link>
          </li>
          <li className="nav-item">
            <Link to={'/lichkab'} className="nav-link">Личный кабинет</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </header>
    );
=======
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'}> <img src={img} className="Logo" alt="..." />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page">Главная</Link>
              </li>
              <li className="nav-item">
                <Link to={'/dobavjiv'} className="nav-link">Сообщить о нахождении</Link>
              </li>
              <li className="nav-item">
                <Link to={'/vsejiv'} className="nav-link">Все животные</Link>
              </li>
              <li className="nav-item">
                <Link to={'/registracia'} className="nav-link">Регистрация</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Voiti'} className="nav-link">Вход</Link>
              </li>
              <li className="nav-item">
                <Link to={'/lichkab'} className="nav-link">Личный кабинет</Link>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Найти</button>>
          </form>
        </div>
      </nav>
    </header>
  );
>>>>>>> c792d2a30f4e279092e624addb5a197fddc2fa66
};

export default Header