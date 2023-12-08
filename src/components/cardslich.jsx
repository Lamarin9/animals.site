import React from 'react';
import img6 from '../images/Pic/Bronenos.png';
import "../components/qqq.css";

const Cardslich = () => {
    return(
        <div>
        <div class="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <div class="col">
          <div class="card h-100">
            <img src={img6} class="card-img-top" alt="..."/>
            <div class="card-body ft">
              <div>
              <div class="izmen">
              <h5 class="card-title">Джейк</h5>
              <h5 class="teext">На модерации</h5>
            </div>
              <p class="card-text">Район: Выборгский. Найден: 14.08.23 Вид: Броненосец.</p>
            </div>
            <div class="izmen mt-3"><button type="button" class="btn btn-outline-danger">Удалить объявление</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Изменить данные</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Cardslich;