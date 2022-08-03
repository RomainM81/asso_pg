import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Banner.css'

const Banner = () => {

const handleDragStart = (e) => e.preventDefault();
 
const items = [
    <img className="banner-img" src={require("./../../assets/banner2.jpg")} onDragStart={handleDragStart} alt="test" />,
    <img className="banner-img" src={require("./../../assets/banner4.jpg")} onDragStart={handleDragStart} alt="test" />,
    <img className="banner-img" src={require("./../../assets/banner3.jpeg")} onDragStart={handleDragStart} alt="test" />,
  ]

    return ( 
        <div className="banner-container">
            { items.length > 0 && 
                <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval='5000'
                infinite
                animationDuration='2000'
                // disableButtonsControls
                disableDotsControls
        />
            }
        </div>
     );
}
 
export default Banner;