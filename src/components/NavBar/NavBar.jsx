import { useState } from "react";

import { NavLink } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './NavBar.css'

const NavBar = () => {

    const [burgerStatus, setBurgerStatus] = useState(false)

    return ( 
        <div className="nav-bar">
            <div className="menu">
                <NavLink to='/members' className={'navlink'}><li>Liste des Membres</li></NavLink>
                <NavLink to='/sponsors' className={'navlink'}><li>Sponsors</li></NavLink>
                <NavLink to='/press' className={'navlink'}><li>Coté Presse</li></NavLink>
                <NavLink to='/dons' className={'navlink'}><li>La journée des Associations</li></NavLink>
                <NavLink to='/tournoi' className={'navlink'}><li>Le tournoi</li></NavLink>
                <NavLink to='/galerie' className={'navlink'}><li>Galerie</li></NavLink>
                <NavLink to='/messages' className={'navlink'}><li>Nous Contacter</li></NavLink>
            </div>
            <div className="menu-icon">
                <MenuIcon onClick={() => setBurgerStatus(true)}>
                </MenuIcon>
            </div>
            <div className={burgerStatus ? "burger-menu" : "bm-closed"}>
                <div className="close-wrapper" >
                    <CloseIcon className="close-button" onClick={() => setBurgerStatus(false)}></CloseIcon>
                </div>
                <NavLink to='/members' className={'navlink'}><li>Liste des Membres</li></NavLink>
                <NavLink to='/sponsors' className={'navlink'}><li>Sponsors</li></NavLink>
                <NavLink to='/press' className={'navlink'}><li>Coté Presse</li></NavLink>
                <NavLink to='/dons' className={'navlink'}><li>La journée des Associations</li></NavLink>
                <NavLink to='/tournoi' className={'navlink'}><li>Le tournoi</li></NavLink>
                <NavLink to='/galerie' className={'navlink'}><li>Galerie</li></NavLink>
                <NavLink to='/messages' className={'navlink'}><li>Nous Contacter</li></NavLink>
            </div>
        </div>
     );
}
 
export default NavBar;