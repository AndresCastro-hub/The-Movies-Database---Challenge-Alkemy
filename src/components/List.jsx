import { useEffect , useState} from "react";
import { Link, Redirect } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const List = () => {

  const [moviesList , setMoviesList] = useState([]);

  let token = sessionStorage.getItem('token');
  const SwalAlert = withReactContent(Swal)

  useEffect (() => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=fa55cfc769260df825a027aecef54fcb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&';
    axios
      .get(url)
      .then( respuesta => {
        setMoviesList(respuesta.data.results);
      })
      .catch( error => {
        SwalAlert.fire('Estamos teniendo incovenientes, vuelve a intentarlo mas tarde..')
      })
  },[setMoviesList])
    
  
  return (
    <>
      {!token && <Redirect to='/' />}

      <div className="row m-4">

      {
        moviesList.map( (movie, id) =>{
          return(
            <div key={id}  className="col-3">
              <div className="card my-4"  >
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

export default List