

const Buscador = () => {

    const submitHandler = e =>{
        e.preventDefault();
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