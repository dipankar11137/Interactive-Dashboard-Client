import React from "react";
import headphone from '../../../Images/Background/bg-headphone.jpeg';
import Footer from '../../Share/Footer';
import Banner from './Banner';
import BeforeFooter from './BeforeFooter';
import OurProducts from './OurProducts/OurProducts';
import SmartProduct from './SmartProduct';

const Home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <OurProducts />
      <div
        style={{
          backgroundImage: `url(${headphone})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <SmartProduct />
      </div>
      <BeforeFooter />
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
      <Footer />
    </div>
  );
};

export default Home;
