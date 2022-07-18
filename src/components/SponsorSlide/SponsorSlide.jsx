import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import axios from "axios"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './SponsorSlide.css'

const SponsorSlide = () => {

    const [sponsors, setSponsors] = useState([])
    const items = []
    
    useEffect(() => {
        const getData = async () => {
            const resData = await axios.get(
                `${process.env.REACT_APP_API_ROUTE}/sponsors/premium`
            )
            setSponsors(resData.data)
        }
        getData()
    }, [])

    const handleDragStart = (e) => e.preventDefault();
    
    // eslint-disable-next-line no-lone-blocks
    { 
        sponsors.length > 0 
        &&
        items.push(sponsors.map((l, index) => (
            <div key={index} className="sp-slide-container-effect">
                <img 
                    className="sp-slide-img"
                    src={l.sponsor_logo}
                    alt={l.sponsor_name}
                    onDragStart={handleDragStart}
                />
                <div className='sp-slide-middle'>
                    <NavLink to='/sponsors' className={'navlink'}>
                        <div className='sp-slide-effect-txt'>Nos Sponsors</div>
                    </NavLink>
                </div>
            </div>
        )))
    }
    
    return ( 
        <div className="sp-slide-container">
            { items.length > 0 && 
                <AliceCarousel
                mouseTracking
                items={items[0]}
                autoPlay
                autoPlayInterval='4000'
                infinite
                animationDuration='2000'
                disableButtonsControls
                disableDotsControls
        />
            }
        </div>
     );
}
 
export default SponsorSlide;