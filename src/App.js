import { Switch , Route} from "react-router-dom";

import Login from "./components/Login";
import List from "./components/List";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Detalle from './components/Detalle';
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import { useState, useEffect } from "react";

function App() {

  const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {

        const favInLocal = localStorage.getItem('favs');
        
        if(favInLocal !=null){
            const favsArray = JSON.parse(favInLocal);
            setFavoritos(favsArray)
        }
    },[])

  const agregarOEliminarFavoritos = e => {

    const favMovies = localStorage.getItem('favs');

    let tempMovieInFavs

    if(favMovies === null){
      tempMovieInFavs = [];
    }else{
      tempMovieInFavs = JSON.parse(favMovies)
    }
    const btn = e.currentTarget;
    const parentBtn = btn.parentElement;
    const imgUrl = parentBtn.querySelector('img').getAttribute('src');
    const title = parentBtn.querySelector('h5').innerText;
    const overview= parentBtn.querySelector('p').innerText;

    const movieData = {
      imgUrl, 
      title , 
      overview,
      id: btn.dataset.movieId
    }

    let movieIsInArray = tempMovieInFavs.find(movie => {
      return movie.id === movieData.id
    })

    if(!movieIsInArray){
      tempMovieInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMovieInFavs))
      setFavoritos(tempMovieInFavs)
    }else{
      let moviesLeft = tempMovieInFavs.filter ( movie => {
        return movie.id !== movieData.id
      })
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavoritos(moviesLeft)
    }

  }

  return (
    <>
    <Menu/>

    <div className="container">

      <Switch>
        <Route exact path="/" component = {Login} />
        <Route path="/listado" render = {(props) => <List agregarOEliminarFavoritos={agregarOEliminarFavoritos} {...props}/>} />
        <Route path="/detalle" component = {Detalle} />
        <Route path="/resultados" render = {(props) => <Resultados agregarOEliminarFavoritos={agregarOEliminarFavoritos} {...props}/>} />
        <Route path="/favoritos" render = {(props) => <Favoritos favoritos={favoritos} agregarOEliminarFavoritos={agregarOEliminarFavoritos} {...props } />} />
        
      </Switch>
    </div>
  
    <Footer/>
    </>
  );
}

export default App;
