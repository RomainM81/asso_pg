import { NavLink } from 'react-router-dom';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';

import './Footer.css'

const Footer = () => {
    return ( 
        <div className='footer-container'>
            <div className='footer-column'>
                <a 
                    href='https://guillaumevincent.fr/'
                    target='_blank'
                    rel='noreferrer'><img className='footer-logo' src={require("./../../assets/logo-nobg.png")} alt="PourGuillaume"></img>
                </a>
                <a 
                    href='https://www.facebook.com/PourGuillaume/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <div className='footer-fcb'>
                        <FacebookIcon sx={{ fontSize: 80 }}/>
                    </div>
                </a>
                <div className='footer-button'>
                    <PhoneInTalkIcon></PhoneInTalkIcon>
                    <p>06 70 63 65 02</p>
                </div>
                <div className='footer-button'>
                    <AlternateEmailIcon></AlternateEmailIcon>
                    <p>tournoiguillaume@hotmail.fr</p>
                </div>
            </div>
            {/* <div className='footer-column'>
                <ul>
                    <NavLink to='/members' className={'navlink'}><li>Liste des Membres</li></NavLink>
                    <NavLink to='/sponsors' className={'navlink'}><li>Sponsors</li></NavLink>
                    <NavLink to='/press' className={'navlink'}><li>Coté Presse</li></NavLink>
                    <NavLink to='/dons' className={'navlink'}><li>La journée des Associations</li></NavLink>
                    <NavLink to='/tournoi' className={'navlink'}><li>Le tournoi</li></NavLink>
                    <NavLink to='/galerie' className={'navlink'}><li>Galerie</li></NavLink>
                    <NavLink to='/messages' className={'navlink'}><li>Nous Contacter</li></NavLink>
                </ul>
            </div> */}
        </div>
     );
}
 
export default Footer;
