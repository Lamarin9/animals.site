import React from 'react';
import img from '../images/Pic/Logo.png';

const Header = () => {
    return(
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a href="index.html"><img src={img} className="Logo" alt="..." /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html">Главная</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="qwe6.html">Добавить в поиск</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="qwe5.html">Поиск животного</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="qwe2.html">Регистрация</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="qwe3.html">Вход</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </header>
    );
};

export default Header