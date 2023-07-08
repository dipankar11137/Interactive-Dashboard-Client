import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import '../../CSS/PicStyle.css';
import backgroundImage from '../../../Images/Background/bb.jpg';
import phone from '../../../Images/Background/mobile.png';
import '../../CSS/ReactSlider.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      // }}
      className="bg-white"
    >
      <div className="mx-6 p-1 rounded-2xl text-black">
        <Slider {...settings}>
          <div className="  rounded-lg ">
            <div
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="grid  grid-cols-3  gap-x-3"
            >
              <div className="flex justify-center items-center bg-red-400">
                <div>
                  <h1 className="text-6xl font-extrabold text-center">
                    Top Brands lowest Prices WIDE RANGE OF MOBILE PHONES!
                  </h1>
                  <button className="btn btn-primary font-bold">Buy Now</button>
                </div>
              </div>
              <div className="col-span-2">
                <img
                  className=" rounded-l-2xl w-full h-[600px] pic-style"
                  src={phone}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="  rounded-lg ">
            <div
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="grid  grid-cols-3  gap-x-3"
            >
              <div className="flex justify-center items-center bg-red-400">
                <div>
                  <h1 className="text-6xl font-extrabold text-center">
                    Top Brands lowest Prices WIDE RANGE OF MOBILE PHONES!
                  </h1>
                  <button className="btn btn-primary font-bold">Buy Now</button>
                </div>
              </div>
              <div className="col-span-2">
                {/* <img
                  className=" rounded-l-2xl w-full h-[600px] pic-style"
                  src="https://www.geetanjalihospital.co.in/images/blood-bank.jpg"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
