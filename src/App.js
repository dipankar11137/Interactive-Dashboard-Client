import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Share/Header';
import Navbar from './Components/Share/Navbar';
import NotFound from './Components/Share/NotFound';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/Pages/About/About';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import EditProfile from './Components/Pages/Dashboard/Profile/EditProfile';
import Profile from './Components/Pages/Dashboard/Profile/Profile';
AOS.init();

function App() {
  return (
    <div>
      <Header />
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* dashboard Start */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="editProfile" element={<EditProfile />} />
        </Route>
        {/* dashboard end */}
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
