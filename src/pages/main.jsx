import Header from "../components/header";
import Footer from "../components/footer";
import Sliders from "../components/slider";
import Cards from "../components/cards";
import "../components/qqq.css";
import React,{useEffect, useState, useRef} from 'react';

const Main = () => {

  let [email, setEmail] = useState();

  let blocks = useRef();

  function sign(e) {
    e.preventDefault();

    const forms = document.getElementById('email')

    if (!forms.checkValidity()) {
        e.stopPropagation()
        forms.classList.add('was-validated')
        return
    }

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(email);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://pets.сделай.site/api/subscription", requestOptions)
.then(response => response.status)
.then(result => {
  console.log(result);
    if (result==204) {
        let message = 'Вы успешно подписались на рассылку Му-ха-ха-ха!!!';
        blocks.current.innerText = message;
        blocks.current.style.background = "#34C924"
        blocks.current.style.color = "black";
        blocks.current.style.border = "1px solid rgb(19, 136, 8)"
        blocks.current.style.display = 'flex';
    }
    else
    {
        let message = 'Вы ввели неправильную почту!!!';
blocks.current.innerText = message;
blocks.current.style.background = '#C76864';
blocks.current.style.color = "black";
blocks.current.style.border = "1px solid #801818"
blocks.current.style.display = 'flex';
    }})
    .catch(error => console.log('error', error));
  }


  let [card, setCard]=useState({data:{orders:[]}});
  useEffect(()=>req_card(card, setCard),[]);
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
    <>
      <Header />
      <div className="line">Нашлись хозяева!</div>

<Sliders/>

      <div className="line">Свежие объявления!</div>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
{cards}
      </div>
      <div className="line1">Подписка на новости!</div>

      <form className="w-50 m-auto p-3" style={{ "minWidth": "300px" }} noValidate onSubmit={sign} id='email'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Укажите вашу почту для связи с вами</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setEmail({email: e.target.value})}/>
          <div id="emailHelp" className="form-text">Ваши данные полностью конфиденциальны.</div>
        </div>
        <button type="submit" className="btn btn-primary">Отправить почту нам</button>
      </form>
      <div className="alert alert-primary w-50 asda mt-3 " style={{"display":"none"}} role="alert" ref={blocks}></div>
      
      <Footer />
    </>
  )
}

export default Main;
