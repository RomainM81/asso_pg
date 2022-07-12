import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './screens/HomePage/HomePage';
import Members from './screens/Members/Members';
import Sponsors from './screens/Sponsors/Sponsors';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/members' element={<Members />} />
        <Route path='/sponsors' element={<Sponsors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
