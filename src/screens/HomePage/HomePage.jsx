import Banner from "../../components/Banner/Banner";
import Edition from "../../components/Edition/Edition";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Presentation from "../../components/Presentation/Presentation";
import SponsorSlide from "../../components/SponsorSlide/SponsorSlide";

import './HomePage.css'

const HomePage = () => {
    return ( 
        <div className="home-container">
            <NavBar />
            <Banner />
            <div className="home-row">
                <Presentation />
                <SponsorSlide />
            </div>
            <Edition />
            {/* <Footer /> */}
        </div>
     );
}
 
export default HomePage;