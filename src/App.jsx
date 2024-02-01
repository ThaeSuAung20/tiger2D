import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home';
import Wallet from './components/Pages/Wallet';
import Help from './components/Pages/Help';
import Profile from './components/Pages/Profile';
import EditProfile from './components/Pages/EditProfile';

import './App.css';
import MoneyOut from './components/Pages/MoneyOut';
import MoneyTransfer from './components/Pages/MoneyTransfer';
import MoneyIn from './components/Pages/MoneyIn';
import BankAccount from './components/Pages/BankAccount';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/wallet/money-out' element={<MoneyOut />} />
          <Route path='/wallet/money-in' element={<MoneyIn />} />
          <Route path='/wallet/money-transfer' element={<MoneyTransfer />} />
          <Route path='/wallet/bank-account' element={<BankAccount />} />

          <Route path='/help' element={<Help />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/editProfile' element={<EditProfile />} />
        </Routes>
        {/* Render Footer after routes */}
      </BrowserRouter>
    </div>
  );
}

export default App;
