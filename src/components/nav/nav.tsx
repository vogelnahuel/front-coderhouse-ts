
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './nav.scss'

export const Nav = () => {
  const history = useLocation();

  const { pathname } = history;

  const handleClick = (e:any) => {
    
  }


  return (
    <nav className="nav-admin">
      <div className="scroll">
        <div className="nav-section">
          <h3>Rutas</h3>
          <ul>
            <li>
              <div
                className={`circle ${pathname === "/dashboard" && "visible"}`}
              />
              <Link onClick={handleClick} to="/dashboard">
                  Dashboard
              </Link>
            </li>
            <li>
              <div
                className={`circle ${
                  pathname.includes("/cart") && "visible"
                }`}
              />
              <Link onClick={handleClick} to="/cart">
                Carrito
              </Link>
            </li>
            <li>
              <div
                className={`circle ${
                  pathname.includes("/product") && "visible"
                }`}
              />
              <Link onClick={handleClick} to="/product">
                Productos
              </Link>
            </li>
            <li>
              <div
                className={`circle ${
                  pathname.includes("/message") && "visible"
                }`}
              />
              <Link onClick={handleClick} to="/message">
                Mensajes
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
