import './App.css';
import { BrowserRouter,Route,Routes,Outlet } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Card from './components/cards/Card';
import Text from './components/text/Text';
import SLideshow from './components/slideshow/Slideshow';
import Hr from './components/hr/Hr';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Private1 from './components/private-comp/Private1';
import Admin from './components/admin/Admin';
import AdminLogin from './components/admin/AdminLogin';
import Private2 from './components/private-comp/private2';
import CardsDescription from './components/cardsDesciption/CardsDescription';
import AdminAdd from './components/adminAdd/AdminAdd';
import AdminDelete from './components/adminDelete/AdminDelete';
import AdminUpdate from './components/adminUpdate/AdminUpdate';
import UpdateCard from './components/adminUpdate/UpdateCard';
import Cart from './components/cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>




      <Route  element={<Private1/>}>
             <Route path='/about' element={<Text/>}/>
      <Route path='/cart' element={<Cart/>}/>

      </Route>

      <Route element={<h1><Private2/></h1>}>
        <Route path='/admin/'element={<><Admin/></>}>
            <Route path='add' element={<AdminAdd/>}/>
            <Route path='update' element={<AdminUpdate/>}/>
            <Route path='delete' element={<AdminDelete/>}/>
        </Route>
        <Route path='admin/update/card' element={<UpdateCard/>}/>
      </Route>
      
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cardsDescription" element={<CardsDescription/>}></Route>
      <Route path="/" element={<div>  <SLideshow/><Hr/><Profile/><Hr/><Card/></div>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}/>




     </Routes>
     <Hr/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
