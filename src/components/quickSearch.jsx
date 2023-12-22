import { useRef, useState } from 'react';
import "../components/qqq.css";
import Cards from '../components/cards';

const QuickSearch = () => {

    let [card, setCard] = useState([]);
    let block = useRef();
    let res = useRef();
    let but = useRef();
    let list = [];
    let listRes = [];
    let datalist;

    const search = (text) => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const MIN_TEXT_LENGTH_FOR_REQUEST = 4;

        if (text.length < MIN_TEXT_LENGTH_FOR_REQUEST){
            return; // Don't send request to server if the text is too short.
        }

        fetch("https://pets.сделай.site/api/search?query=" + text, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.data.orders.length > 0) {
                    debugger;
                    setCard(result.data.orders);
                    let ordersForHints = result.data.orders;

                    res.current.style.display = "none";

                    if (text.length >= MIN_TEXT_LENGTH_FOR_REQUEST ) {
                        ordersForHints.map((item) => list.push(item.description));
                        listRes = Array.from(new Set(list));
                        datalist = document.getElementById('datalist');
                        datalist.innerHTML = ``; // Clear the element every time. Otherwise duplicates appear.
                        
                        listRes.map((item) => datalist.innerHTML += `<option value="${item}"></option>`);
                    }
                }
                else {
                    let message = 'Не найдено';
                    block.current.style.block = "none";
                    res.current.innerText = message;
                    res.current.style.background = "#D6D6FF"
                    res.current.style.color = "black";
                    res.current.style.border = "1px solid rgb(119, 119, 255)"
                    res.current.style.display = 'block';
                }
            })
            .catch(error => console.log('error', error));
    }


    return (
        <div>
            <form className="needs-validation w-50 flex justify-content-center" noValidate style={{ "margin": "20px auto 20px auto", "minWidth": "300px" }}>
                <div>
                    <div className='d-flex justify-content-center align-items-center gap-3'>
                        <input list='datalist' type="text" className="form-control" id="validationCustom01" required onChange={(e) => setTimeout(() => {search(e.target.value)}, 1000)}/>
                        <datalist id="datalist">
                        </datalist>
                        <button ref={but} type="submit" className='btn btn-primary'>Поиск</button>
                    </div>
                </div>
            </form>
            <div className="cards" ref={block}>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
                {card.map((item, index) => <Cards data={item} key={index} />)}
                </div>
            </div>
            <div className="alert alert-primary w-50 none nocards" role="alert" ref={res}></div>
        </div>

    );
};

export default QuickSearch;

