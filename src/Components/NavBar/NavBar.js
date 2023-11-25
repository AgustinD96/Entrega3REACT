import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar"> 
          <Link className="/">
          <h1>Cuencos que Cuentan</h1>
          </Link>
            <div className="Categories">
                <NavLink to = {"/category/cuencos"} className={({isActive}) => isActive ? "ActiveOption" : Option}>Cuencos</NavLink>
                <NavLink to = {"/category/macetas"} className={({isActive}) => isActive ? "ActiveOption" : Option}>Macetas</NavLink>
                <NavLink to = {"/category/tazas"} className={({isActive}) => isActive ? "ActiveOption" : Option}>Tazas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;