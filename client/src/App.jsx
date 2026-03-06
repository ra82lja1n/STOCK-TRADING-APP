import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import Home from './pages/Home.jsx';
import Landing from './pages/Landing.jsx';
import LoginProtector from './RouteProtectors/AuthProtector.jsx';
import AuthProtector from './RouteProtectors/LoginProtector.jsx';
import Admin from './pages/Admin.jsx';
import Portfolio from './pages/Portfolio.jsx';
import History from './pages/History.jsx';
import Profile from './pages/Profile.jsx';
import Navbar from './components/Navbar.jsx';
import StockChart from './pages/StockChart.jsx';
import Users from './pages/Users.jsx'
import AllOrders from './pages/AllOrders.jsx'
import AllTransactions from './pages/AllTransactions.jsx'
import AdminStockChart from './pages/AdminStockChart.jsx';

import { Toaster } from 'react-hot-toast';


function App() {


  return (

    <div className="App">


      <Navbar />
     

      <Routes>
        <Route exact path='' element={<LoginProtector> <Landing /> </LoginProtector> } />
        <Route  path='/home' element={<AuthProtector><Home /></AuthProtector>} />
        <Route  path='/portfolio' element={<AuthProtector><Portfolio /></AuthProtector>} />
        <Route  path='/history' element={<AuthProtector><History /></AuthProtector>} />
        <Route  path='/profile' element={<AuthProtector><Profile /></AuthProtector>} />
        <Route  path='/stock/:id' element={<AuthProtector><StockChart /></AuthProtector>} />

        <Route  path='/admin' element={ <AuthProtector><Admin /></AuthProtector>} />
        <Route  path='/users' element={ <AuthProtector><Users /></AuthProtector>} />
        <Route  path='/all-orders' element={ <AuthProtector><AllOrders /></AuthProtector>} />
        <Route  path='/all-transactions' element={ <AuthProtector><AllTransactions /></AuthProtector>} />
        <Route  path='/admin-stock/:id' element={<AuthProtector><AdminStockChart /></AuthProtector>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
