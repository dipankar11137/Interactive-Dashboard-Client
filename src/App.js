import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Share/Header';
import Navbar from './Components/Share/Navbar';
import NotFound from './Components/Share/NotFound';

function App() {
  return (
    <div>
      <Header />
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
