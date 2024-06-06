import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LeandingPage from './Pages/LeandingPage/LeandingPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register.jsx'
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Holidays from './Pages/Holidays/Holidays';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';
import NavigationPage from './Components/NavigationPage/NavigationPage.jsx';
import LupaKataSandi from './Components/LupaKataSandi/LupaKataSandi.jsx';
import MasukanKataSandi from './Components/MasukanKataSandi/MasukanKataSandi.jsx';
import Verifikasi from './Components/Verifikasi/Verifikasi.jsx';
import PaketLiburan from './Pages/PaketLiburan/PaketLiburan.jsx';
import PaketLiburan3 from './Pages/Paket/Paket.jsx';




function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/login'&& location.pathname !== '/lupa' && location.pathname !== '/register' && location.pathname !== '/masukan-kata-sandi' && location.pathname !== '/verifikasi' && location.pathname !== '/paket'
  && location.pathname !== '/pilihanpaket';


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><NavigationPage /><LeandingPage /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verifikasi' element={<Verifikasi />} />
        <Route path='/lupa' element={<LupaKataSandi />} />
        <Route path='/masukan-kata-sandi' element={<MasukanKataSandi />} />
        <Route path='/dasboard' element={<><NavigationBar /><Home /></>} />
        <Route path='/paket' element={<><NavigationBar /><PaketLiburan /></>} />
        <Route path='/pilihanpaket' element={<><NavigationBar /><PaketLiburan3 /></>} />
        <Route path='/city-breaks' element={<><NavigationBar /><CityBreaks /></>} />
        <Route path='/holidays' element={<><NavigationBar /><Holidays /></>} />
        <Route path='/destinations' element={<><NavigationBar /><Destinations /></>} />
      </Routes>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
