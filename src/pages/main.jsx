import Header from "../components/header";
import Footer from "../components/footer";
import Sliders from "../components/slider";
import Cards from "../components/cards";
import "../components/qqq.css";
import React,{useEffect, useState} from 'react';

const Main = () => {

  let [card, setCard]=useState({data:{orders:[]}});
  useEffect(()=>req_card(card, setCard), [card]);
  function req_card(card, setCard) {   

  
    fetch("https://pets.сделай.site/api/pets")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setCard(result)
       
    })
      .catch(error => console.log('error', error));
    
    }
    let  cards=card.data.orders.map((order, index)=>{
  return<Cards data={order}/>;        
    })
  return (
    <div>
      <Header />
      <div className="line">Нашлись хозяева!</div>

<Sliders/>



      <div className="line">Свежие объявления!</div>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
{cards}
      </div>
      <div className="line1">Обратная связь если вы видели животное!</div>

      <form className="w-50 m-auto p-3" style={{ "minWidth": "300px" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Укажите вашу почту для связи с вами</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Ваши данные полностью конфиденциальны.</div>
        </div>

        <button type="submit" className="btn btn-primary">Отправить почту нам</button>
      </form>
      <Footer />
    </div>
  )
}

export default Main;
