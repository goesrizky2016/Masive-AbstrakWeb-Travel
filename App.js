import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Destination from './Pages/Destination/destination';
import Holidays from './Pages/Holidays/holidays';
import Citybreaks from './Pages/CityBreaks/citybreaks';
import NavigationBar from './Components/Navigation/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/citybreaks' element={<Citybreaks />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
