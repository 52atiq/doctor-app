import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
      <Route path='' element ={<Home></Home>}></Route>
      <Route path='about' element={<About> </About>}> </Route>
      <Route path='appointment'  element={<Appointment></Appointment>} />

      <Route path='login'  element={<Login></Login>} />
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
