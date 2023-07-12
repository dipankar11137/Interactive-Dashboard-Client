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

      <Footer />
    </div>
  );
};

export default Home;
