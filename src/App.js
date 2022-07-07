import Login from "./components/Login";
import List from "./components/List";
import { Switch , Route} from "react-router-dom";


function App() {
  return (
      <Switch>
        <Route exact path="/" component = {Login} />
        <Route   path="/listado" component = {List} />
      </Switch>
  );
}

export default App;
