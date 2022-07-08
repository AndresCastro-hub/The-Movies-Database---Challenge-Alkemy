import Login from "./components/Login";
import List from "./components/List";
import { Switch , Route} from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Menu/>

    <div className="container mt-3">
      <Switch>
        <Route exact path="/" component = {Login} />
        <Route   path="/listado" component = {List} />
      </Switch>
    </div>

    <Footer/>
    </>
  );
}

export default App;
