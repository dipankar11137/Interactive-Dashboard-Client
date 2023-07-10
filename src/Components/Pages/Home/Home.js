import React from "react";
import Footer from '../../Share/Footer';
import Banner from './Banner';
import BeforeFooter from './BeforeFooter';
import OurProducts from './OurProducts/OurProducts';

const Home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <OurProducts />
      <div>
        <BeforeFooter />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
