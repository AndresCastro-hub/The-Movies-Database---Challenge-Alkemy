import { Link } from "react-router-dom";

const Favoritos = (props) => {

    return (
        <div className="row m-4">
            <h2>Tus favoritos son:</h2>
            {props.favoritos.length === 0 && <p>No hay nada en favoritos..</p>}
        {
          props.favoritos.map( (movie, id) =>{
            return(
              <div key={id}  className="col-3">
                <div className="card my-4"  >
                  <img className="card-img-top" src={movie.imgUrl} alt="Card image cap"/>
                  <button onClick={props.agregarOEliminarFavoritos} data-movie-id = {movie.id} className="favouriteBtn">❤️</button>
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
    )
}

export default Favoritos