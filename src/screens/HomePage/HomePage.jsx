import NavBar from "../../components/NavBar/NavBar";
import Presentation from "../../components/Presentation/Presentation";
import SponsorSlide from "../../components/SponsorSlide/SponsorSlide";

import './HomePage.css'

const HomePage = () => {
    return ( 
        <div className="home-container">
            <NavBar />
            <Presentation />
            <SponsorSlide />
        </div>
     );
}
 
export default HomePage;