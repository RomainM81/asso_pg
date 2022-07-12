import { NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <ul>
                <NavLink to='/members' className={'navlink'}><li>Liste des Membres</li></NavLink>
                <NavLink to='/sponsors' className={'navlink'}><li>Sponsors</li></NavLink>
                <NavLink to='/press' className={'navlink'}><li>Coté Presse</li></NavLink>
                <NavLink to='/' ><img className={'nav-logo'} src={require('./../../assets/logo_pg2.jpg')} alt=""></img></NavLink>
                <NavLink to='/dons' className={'navlink'}><li>La journée des Associations</li></NavLink>
                <NavLink to='/tournoi' className={'navlink'}><li>Le tournoi</li></NavLink>
                <NavLink to='/galerie' className={'navlink'}><li>Galerie</li></NavLink>
                <NavLink to='/messages' className={'navlink'}><li>Nous Contacter</li></NavLink>
            </ul>
        </div>
     );
}
 
export default NavBar;