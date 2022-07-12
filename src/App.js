import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './screens/HomePage/HomePage';
import Members from './screens/Members/Members';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/members' element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
