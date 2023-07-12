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
import RequireAuth from './Components/Login/RequireAUth';
import About from './Components/Pages/About/About';
import AddItem from './Components/Pages/Dashboard/Add Product/AddItem';
import Contacts from './Components/Pages/Dashboard/Contacts/Contacts ';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageProducts from './Components/Pages/Dashboard/Manage Product/ManageProducts';
import ManageBookings from './Components/Pages/Dashboard/ManageBooking/ManageBookings';
import MyBookings from './Components/Pages/Dashboard/My Booking/MyBookings';
import EditProfile from './Components/Pages/Dashboard/Profile/EditProfile';
import Profile from './Components/Pages/Dashboard/Profile/Profile';
import BuyProducts from './Components/Pages/Home/Buy Products/BuyProducts';
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
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/buy/:id" element={<BuyProducts />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* dashboard Start */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />} />

          <Route path="profile" element={<Profile />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="myBooking" element={<MyBookings />} />
          <Route path="manageBooking" element={<ManageBookings />} />
          <Route path="addProduct" element={<AddItem />} />
          <Route path="manageProduct" element={<ManageProducts />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
        {/* dashboard end */}
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
