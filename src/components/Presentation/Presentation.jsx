import { NavLink } from 'react-router-dom';
import './Presentation.css'

const Presentation = () => {
    return ( 
        <div className='pres-container'>
            <div className='pres-container-effect'>
                <img className='pres-img' src={require("./../../assets/00-les_enfants3.jpg")} alt=""></img>
                <div className='pres-middle'>
                    <NavLink to='/tournoi' className={'navlink'}>
                        <div className='pres-effect-txt'>Le Tournoi</div>
                    </NavLink>
                </div>
            </div>
            <p className='pres-txt'>Depuis 2003, afin de perpétuer le souvenir de Guillaume, vice-président et joueur du Handball Club Champsaur Valgaudemar (HBCCV), un tournoi ouvert à tous, jeunes et moins jeunes, licencié(e)s et non licencié(e)s, a été créé par les membres du club.</p>
        </div>
     );
}
 
export default Presentation; 