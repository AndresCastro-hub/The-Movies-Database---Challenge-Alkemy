import { Link } from "react-router-dom"
import '../app.css'

const Menu = () => {
  return (
    // <header>
    //     <nav className="menu">
    //         <ul>
    //             <li>
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //                 <Link className="menuItem"  to="/listado">Listado</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // </header>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{paddingLeft:'50px'}} >
        <span className="navbar-brand" >Movies</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div  className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/listado">Listado</Link>
                    </li>
                </ul>
            </div>
    </nav>
    
  )
}

export default Menu