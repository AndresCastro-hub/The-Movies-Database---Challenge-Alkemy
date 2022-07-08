import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useHistory } from 'react-router-dom';

const Buscador = () => {

    const history = useHistory();

    const SwalAlert = withReactContent(Swal)

    const submitHandler = e =>{
        e.preventDefault();

        const keyword = e.target.keyword.value.trim();

        if(keyword.length === 0){
            SwalAlert.fire('El buscador no puede estar vacio')
        }else{
            e.target.keyword.value= ''
            history.push(`/resultados?palabraclave=${keyword} `)
        }
    }
 
    return (
        <form className="d-flex align-items-center" onSubmit={submitHandler} >
            <label className="form-label mb-0 mx-2">
                <input className="form-control"  type="text" name="keyword" placeholder="Buscar.." />
            </label>
        <button className="btn btn-success" style={{marginRight:'20px'}} type="submit">Buscar</button>
    </form>
    )
}

export default Buscador