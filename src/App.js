import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import AssociationDay from './screens/AssociationDay/AssociationDay';
import Contact from './screens/Contact/Contact';
import Gallery from './screens/Gallery/Gallery';
import HomePage from './screens/HomePage/HomePage';
import Members from './screens/Members/Members';
import Messages from './screens/Messages/Messages';
import Press from './screens/Press/Press';
import Sponsors from './screens/Sponsors/Sponsors';
import Tournament from './screens/Tournament/Tournament';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/members' element={<Members />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/press' element={<Press />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/tournoi' element={<Tournament />} />
        <Route path='/galerie' element={<Gallery />} />
        <Route path='/dons' element={<AssociationDay />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
