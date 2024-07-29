//3.Router 적용
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Detail } from './pages/Detail';
import { Navigation } from './Component/Navigation';

import {Free} from './pages/Free';


function App() {

  return (
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/about" element ={<About/>}/>
      <Route path = "/detail" element ={<Detail/>}/>
      <Route path='/free' element={<Free/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;