import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
import "../components/qqq.css";
import React from 'react';

const Vsejiv = () => {
    return (
        <div>
            <Header />

            <h1 class="lineReg">Найденные животные</h1>

            <hr class="mt-3 mb-4" />
            <div>
                <div class="w-50 m-auto " >
                    <form class="d-flex but" role="search">
                        <input class="form-control me-2" type="search" placeholder="Введите виж животного" aria-label="Search" />
                    </form>
                </div>

                <div class="w-50 m-auto " >
                    <form class="d-flex but" role="search">
                        <input class="form-control me-2" type="search" placeholder="Введите район" aria-label="Search" />
                    </form>
                </div>

                <div class="w-50 m-auto " >
                    <div class="d-flex justify-content-center align-items-center" >
                        <button type="button" class="btn btn-warning">Сделать поиск</button>
                    </div>
                </div>
            </div>
            <hr class="mt-5 mb-4" />

            <div class="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
<br/>
            <Footer />
        </div>
    )
}

export default Vsejiv;