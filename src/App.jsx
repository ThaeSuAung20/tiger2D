import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Layouts/Navbar';
import Home from './components/Pages/Home';
import Wallet from './components/Pages/Wallet';
import Help from './components/Pages/Help';
import Profile from './components/Pages/Profile';
import Footer from './components/Layouts/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/help' element={<Help />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer /> {/* Render Footer after routes */}
      </BrowserRouter>
    </div>
  );
}

export default App;
