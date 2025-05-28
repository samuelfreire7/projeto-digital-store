import './NavLinks.css';
import { NavLink } from 'react-router-dom';


export default function NavLinks() {
  return (
    <nav className="linksheader">
      <NavLink to="/" className={({ isActive }) => isActive ? "home" : "links"}>
        Home
      </NavLink>
      <NavLink to="/produtos" className={({ isActive }) => isActive ? "home" : "links"}>
        Produtos
      </NavLink>
      <NavLink to="/categorias" className={({ isActive }) => isActive ? "home" : "links"}>
        Categorias
      </NavLink>
      <NavLink to="/meus-produtos" className={({ isActive }) => isActive ? "home" : "links"}>
        Meus Produtos
      </NavLink>
    </nav>
  );
}