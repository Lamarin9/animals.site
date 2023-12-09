import React from 'react';
import img6 from '../images/Pic/Bronenos.png';
import "../components/qqq.css";

const Cardslich = (props) => {
    return(
        <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
        <div className="col">
          <div className="card h-100">
            <img src={img6} className="card-img-top" alt="..."/>
            <div className="card-body ft">
              <div>
              <div className="izmen">
              <h5 className="card-title">{props.data.name}</h5>
              <h5 className="teext">{props.data.status}</h5>
            </div>
              <p className="card-text">Район: {props.data.raion}. Найден: {props.data.date}. Вид: {props.data.kind}.</p>
            </div>
            <div className="izmen mt-3"><button type="button" className="btn btn-outline-danger">Удалить объявление</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">Изменить данные</button>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">Изменение данных</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <form>
            <label htmlFor="inputKlic">Кличка:</label>
            <input type="text" className="form-control" id="inputKlic"  required/>
            <br/>
            <label htmlFor="inputPaion">Район:</label>
            <input type="password" className="form-control" id="inputPaion"  required/>
            <br/>
            <label htmlFor="inputNai">Найден:</label>
            <input type="password" className="form-control" id="inputNai"  required/>
            <br/>
          <label htmlFor="inputView">Вид:</label>
          <input type="text" className="form-control" id="inputView"  required/>
          <br/>
          <div className="form-check"></div>
      </form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      <button type="button" className="btn btn-primary">Сохранить изменения</button>
    </div>
</div>
</div>
</div>
</div>

    );
};

export default Cardslich;