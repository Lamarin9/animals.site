import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const Cardjiv = () => {
    const location = useLocation();
    const [card, setCard] = useState([]);

    const request = () => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://pets.сделай.site/api/pets/${location.state}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(location.state);
                console.log(result);
                if ('data' in result) {
                    setCard(result.data.pet);
                }

            })
            .catch(error => console.log('error', error));
    }
    useEffect(request, []);

    return (
        <div>
            <Header />
<<<<<<< HEAD
            <div style={{ "minHeight": "82vh" }}>
=======
            <div style={{ "minHeight": "77vh" }}>
>>>>>>> c792d2a30f4e279092e624addb5a197fddc2fa66
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 d-flex justify-content-center m-auto">
            <div className="col">
      <div className="card h-100">
        <img src={'https://pets.сделай.site' + card.photos1} className="card-img-top wwww" alt="..." />
        <div className="card-body ft">
          <div>
          <h5 className="card-title">{card.kind}</h5>
          <p className="card-text">id: {card.id}</p>
          <p className="card-text">Описание:{card.description}</p>
          <li className="list-group-item">Дата: {card.date} | Район:{card.district}</li>
          </div>
          </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cardjiv;
