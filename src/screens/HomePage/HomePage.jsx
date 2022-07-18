import NavBar from "../../components/NavBar/NavBar";
import Presentation from "../../components/Presentation/Presentation";

import './HomePage.css'

const HomePage = () => {
    return ( 
        <div className="home-container">
            <NavBar />
            <Presentation />
        </div>
     );
}
 
export default HomePage;