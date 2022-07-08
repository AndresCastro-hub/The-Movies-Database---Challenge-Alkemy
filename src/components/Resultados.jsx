import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const Resultados = () => {

    let query = new URLSearchParams(window.location.search);

    let keyword = query.get('palabraclave')

    const SwalAlert = withReactContent(Swal)

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect ( ( ) => {
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=fa55cfc769260df825a027aecef54fcb&language=en-ES&page=1&query=${keyword}`;

        axios
            .get(url)
            .then ( respuesta => {
                if(moviesResults.length === 0){
                    SwalAlert.fire('No se encontraron resultados')
                }
                setMoviesResults(respuesta.data.results)
            })
            .catch( error => {
                console.log(error)
            })
    },[keyword])

    console.log(moviesResults)

    return (
        <>
        <h2 className="container  m-4">Se muestras resultados de: {keyword}</h2>
        {moviesResults.length === 0 && <h3 className="container  m-4">No hay resultados...</h3>}
        <div className="row m-4">
            {
                moviesResults.map( (movie, id) =>{
                    return(
                        <div key={id}  className="col-3">
                            <div className="card "  >
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.overview.substring(0,100)}...</p>
                                    <Link to={`/detalle?id=${movie.id}`} className="btn btn-primary">Ver mas</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Resultados