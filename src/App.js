
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Pages/AboutUs/About';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/ContactUs/Contact';
import Home from './components/Pages/Home/Home';
import Shop from './components/Pages/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Nopage from './components/Nopage/Nopage';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Profile from './components/Admin/Profile/Profile';
import Password from './components/Admin/Password/Password';
import Setting from './components/Admin/Settings/Setting';
import Staff from './components/Admin/Staff/Staff';
import Student from './components/Admin/Student/Student';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={ <Home></Home> } />
      <Route path="/shop" element={ <Shop></Shop> } />
      <Route path="/blog" element={ <Blog></Blog> } />
      <Route path="/about" element={ <About></About> } />
      <Route path="/contact" element={ <Contact></Contact> } />
      <Route path="/dashboard" element={ <Admin></Admin> }>
        <Route path="/dashboard" element = {<Dashboard></Dashboard>}/>
        <Route path="/dashboard/profile" element = {<Profile></Profile>}/>
        <Route path="/dashboard/password" element = { <Password></Password>}/>
        <Route path="/dashboard/setting" element = {<Setting></Setting>}/>
        <Route path="/dashboard/staff" element = {<Staff></Staff>}/>
        <Route path="/dashboard/student" element = {<Student></Student>}/>
      </Route>
      <Route path="/*" element={ <Nopage></Nopage> } />
    </Routes>
    <Footer></Footer> 
    </>
  );
}

export default App;
