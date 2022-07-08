import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detalle = () => {

    const [movie , setMovie] = useState(null)

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);

    let movieId = query.get('id')

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=fa55cfc769260df825a027aecef54fcb&language=en-US}`
        // axios.get('')
        axios
        .get(url)
        .then( respuesta =>{
            setMovie(respuesta.data) 
        })
        .catch( error => {
            console.log('Estamos teniendo errores, vuelvas mas tarde')
        })
    },[movieId])

    return (
        <>
            {!token && <Redirect to= '/'/>}
            {!movie && <p className="container">Cargando...</p>}
            {
              movie &&   
              <>
                <h2 className="mt-2 mb-3" >Titulo: {movie.title}</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid " alt="poster" />
                    </div>
                    <div className="col-8">
                        <h5>Fecha de Estreno: {movie.release_date} </h5>
                        <h5>Reseña:</h5>
                        <p>{movie.overview}</p>
                        <h5>Generos:</h5>
                        <ul>
                            {movie.genres.map( genero => 
                                <li key={genero.id}>{genero.name}</li>
                        )}
                        </ul>
                    </div>
                </div>
              </>
              
            }
        </>
    )
}

export default Detalle