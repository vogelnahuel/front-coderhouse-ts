
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import {
  loginSelector
} from "../../reducers/login";
import { Link } from 'react-router-dom'
import './nav.scss'
import { AppDispatch, RootState } from '../../store';
import { NavType } from './navTypes';
import {useSelector} from "react-redux";

export const Nav = ({user,fetchingLogin}:NavType) => {
  const accountDetails:any = useSelector(state => state);
  const navigate = useNavigate()
  
  const history = useLocation();

  const { pathname } = history;

  const handleClick = (e:any) => {
    
  }
  const cartById = (e:any) => {
    e.preventDefault();

    navigate(`/cart/${accountDetails.login.login.cartUser._id}`)
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
              <Link onClick={cartById} to="/cart">
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

const mapStateToProps = (state: RootState) => ({
  user: loginSelector(state).login,
  fetchingLogin: loginSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Nav);