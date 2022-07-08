import { Link } from "react-router-dom"
import '../app.css'

const Menu = () => {
  return (
    <header>
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/listado">Listado</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Menu