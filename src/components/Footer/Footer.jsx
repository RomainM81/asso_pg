import { NavLink } from 'react-router-dom';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.css'

const Footer = () => {
    const ToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }
    return ( 
        <div className='footer-container'>
            <div className='footer-column'>
                <a 
                    href='https://guillaumevincent.fr/'
                    target='_blank'
                    rel='noreferrer'><img className='footer-logo' src={require("./../../assets/logo-nobg.png")} alt="PourGuillaume"></img>
                </a>
                <div className='footer-icons-container'>
                    <a
                        href='https://www.facebook.com/PourGuillaume/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='footer-icon'>
                            <FacebookIcon sx={{ fontSize: 80 }}/>
                        </div>
                    </a>
                    <a
                        href='https://instagram.com/associationpourguillaume?igshid=YmMyMTA2M2Y='
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='footer-icon'>
                            <InstagramIcon sx={{ fontSize: 80 }}/>
                        </div>
                    </a>
                </div>
                <div className='footer-button' onClick={() => ToClipboard('06 70 63 65 02')}>
                    <PhoneInTalkIcon></PhoneInTalkIcon>
                    <p>06 70 63 65 02</p>
                </div>
                <div className='footer-button' onClick={() => ToClipboard('tournoiguillaume@hotmail.fr')}>
                    <AlternateEmailIcon></AlternateEmailIcon>
                    <p>tournoiguillaume@hotmail.fr</p>
                </div>
                {/* <div className='footer-contact-btn'>
                    <NavLink to='/contact'><p>Nous Contacter</p></NavLink>
                </div> */}
            </div>
            <div className='footer-list'>
                <ul>
                    <NavLink to='/' className={'footer-navlink'}><li>Accueil</li></NavLink>
                    <NavLink to='/sponsors' className={'footer-navlink'}><li>Sponsors</li></NavLink>
                    <NavLink to='/dons' className={'footer-navlink'}><li>La journée des Associations</li></NavLink>
                    <NavLink to='/tournoi' className={'footer-navlink'}><li>Le tournoi</li></NavLink>
                    <NavLink to='/galerie' className={'footer-navlink'}><li>Galerie</li></NavLink>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;
