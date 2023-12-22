import Header from "../components/header";
import Footer from "../components/footer";
import "../components/qqq.css";
import React from 'react';
import Search from "../components/search";
import QuickSearch from "../components/quickSearch";

const Vsejiv = () => {

    return (
        <div>
            <Header />

            <h1 className="lineReg">Быстрый поиск животного</h1>

            <QuickSearch/>

            <h1 className="lineReg">Конкретный поиск животного</h1>

            <hr className="mt-3 mb-4" />
            <div style={{ "minHeight": "10vh" }}>

<Search/>


                <hr className="mt-5 mb-4" />

                <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto justify-content-center">
      </div>
      <br/>
      <nav aria-label="Page navigation example">

      </nav>
            </div>

            <Footer />
        </div>
    )
}

export default Vsejiv;