import { Switch , Route} from "react-router-dom";

import Login from "./components/Login";
import List from "./components/List";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Detalle from './components/Detalle';
import Resultados from "./components/Resultados";

function App() {
  return (
    <>
    <Menu/>

    <div className="container">

      <Switch>
        <Route exact path="/" component = {Login} />
        <Route path="/listado" component = {List} />
        <Route path="/detalle" component = {Detalle} />
        <Route path="/resultados" component = {Resultados} />
        
      </Switch>
    </div>
  
    <Footer/>
    </>
  );
}

export default App;
