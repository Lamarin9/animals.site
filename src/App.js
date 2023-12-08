import {Routes, Route} from "react-router-dom";
import Main from "./pages/main";
import Registarcia from "./pages/registracia";
import Voiti from "./pages/Voiti";
import Lichkab from "./pages/lichkab";
import Dobavjiv from "./pages/dobavjiv";
import Vsejiv from "./pages/vsejiv";
import Cardjiv from "./pages/cardjiv";
import "./components/qqq.css";

function App() {
  return (<div>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/registracia'} element={<Registarcia/>}/>
                <Route path={'/Voiti'} element={<Voiti/>}/>
                <Route path={'/lichkab'} element={<Lichkab/>}/>
                <Route path={'/dobavjiv'} element={<Dobavjiv/>}/>
                <Route path={'/vsejiv'} element={<Vsejiv/>}/>
                <Route path={'/cardjiv'} element={<Cardjiv/>}/>
            </Routes>
        </div>
  );
}
export default App;
