import { NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <ul>
                <NavLink to='/' className={'navlink'}><li>Liste des Membres</li></NavLink>
                <NavLink to='/' className={'navlink'}><li>Sponsors</li></NavLink>
                <NavLink to='/' className={'navlink'}><li>Coté Presse</li></NavLink>
                <NavLink to='/' ><img className={'nav-logo'} src={require('./../../assets/logo_pg.jpg')} alt=""></img></NavLink>
                <NavLink to='/' className={'navlink'}><li>La journée des Associations</li></NavLink>
                <NavLink to='/' className={'navlink'}><li>Le tournois</li></NavLink>
                <NavLink to='/' className={'navlink'}><li>Galleries</li></NavLink>
                {/* <NavLink to='/' className={'navlink'}><li>Nous Contacter</li></NavLink> */}
            </ul>
        </div>
     );
}
 
export default NavBar;