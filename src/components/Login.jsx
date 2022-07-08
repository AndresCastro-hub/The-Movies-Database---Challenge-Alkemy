import axios from "axios";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();

  const SwalAlert = withReactContent(Swal)
  
  const handlerSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(email === '' || password === ''){
      SwalAlert.fire('Los campos no pueden estar vacios')
      return;
    }

    if(email !== '' && !regex.test(email)){
      SwalAlert.fire('Error el formato no es de tipo email')
      return;
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      SwalAlert.fire('Credenciales invalidas')
      return
    }

    axios
      .post('http://challenge-react.alkemy.org', { email , password })
      .then (res => { 
        SwalAlert.fire('Se envio toda la info correctamente') 
        const token = res.data.token;
        localStorage.setItem('token' , token);
        history.push('/listado');
      })
  }

  return (
    <div className="container">
      <h2 className="login">Login</h2>
        <form onSubmit={handlerSubmit}>
          <span>Correo Electronico:</span> <br /> 
          <input className="campos" type="email" name="email" />
          <br />
          <span>Contraseña:</span> <br />
          <input className="campos" type="password" name="password" />
          <br />
          <button className="ingresar" type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login