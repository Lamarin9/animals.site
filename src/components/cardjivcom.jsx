import "../components/qqq.css";
import React from 'react';

const Cardjivcom = (props) => {

    return (
        <div>

<img src={'https://pets.сделай.site'+props.data.photos1} className="picc" alt="..."/>

<div style={{"minHeight":"61vh"}}>
<div className="contei26">
<ul className="list-group list-group-flush">
  <li className="list-group-item">Нашедший: {props.data.name}</li>
  <li className="list-group-item">id: {props.data.id}</li>
  <li className="list-group-item">Телефон: {props.data.phone}</li>
  <li className="list-group-item">Вид: {props.data.name} </li>
  <li className="list-group-item">Чип:{props.data.mark} </li>
  <li className="list-group-item">Район:{props.data.district}</li>
  <li className="list-group-item">Дата:{props.data.date}.</li>
</ul>
</div>
</div>
        </div>
    )
}


export default Cardjivcom;