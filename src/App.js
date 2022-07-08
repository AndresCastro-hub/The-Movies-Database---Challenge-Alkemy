import Login from "./components/Login";
import List from "./components/List";
import { Switch , Route} from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Menu/>

      <Switch>
        <Route exact path="/" component = {Login} />
        <Route   path="/listado" component = {List} />
      </Switch>

    <Footer/>
    </>
  );
}

export default App;
