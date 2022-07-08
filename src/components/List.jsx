import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom"

const List = () => {

  const history = useHistory();

  useEffect( () => {
    const token = localStorage.getItem('token');
    if(token === null){
      history.push('/')
    }
  },[])
  
  return (
    <div className="row">

      <div className="col-3">
        <div className="card" style={{width:'18rem'}}>
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-body">
          <h5 className="card-title">Movie Title</h5>
          <p className="card-text">Resume</p>
          <Link href="#" className="btn btn-primary">Ver mas</Link>
          </div>
        </div>
      </div>
      
      

    </div>
  )
}

export default List