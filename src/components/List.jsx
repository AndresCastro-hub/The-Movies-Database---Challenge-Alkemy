import { useEffect } from "react";
import { useHistory } from "react-router-dom"

const List = () => {

  const history = useHistory();

  useEffect( () => {
    const token = localStorage.getItem('token');
    if(token === null){
      history.push('/')
    }
  },[])
  

  return (
    <h2>Soy el componente del listado</h2>
  )
}

export default List