import React from "react";
import Cardjivcom from "../components/cardjivcom";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import "../components/qqq.css";

const Cardjiv = () => {

    let [pets, setPets] = useState({ data: { pet: [] } });
    useEffect(() => request_pets(pets, setPets), []);
    let { id } = useParams();

    function request_pets(pets, setPets) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };


        fetch("https://pets.сделай.site/api/pets/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPets(result);
            })
            .catch(error => console.log('error', error));
    }
    let pet = pets.data.pet;

    return (
        <div>
            <Header />
                <Cardjivcom data={pet} />
            <Footer />
        </div>
    );
}

export default Cardjiv;