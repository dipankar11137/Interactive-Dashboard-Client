import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import '../../CSS/PicStyle.css';
import backgroundImage from '../../../Images/Background/bb.jpg';
import headphone from '../../../Images/Background/headphone.png';
import phone from '../../../Images/Background/mobile.png';
import tv from '../../../Images/Background/tvc.png';
import '../../CSS/ReactSlider.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
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
              className="grid  grid-cols-3  gap-x-3 rounded-lg"
            >
              <div className="flex justify-center items-center ">
                <div>
                  <p className="ml-12">
                    Top Brands{' '}
                    <span className="text-2xl font-bold">lowest</span> Prices
                  </p>
                  <h1 className="text-4xl font-extrabold text-center">
                    WIDE RANGE OF MOBILE PHONES!
                  </h1>
                  <button className="btn btn-primary font-bold lg:ml-32 mt-5">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <img
                  className=" rounded-l-2xl w-full h-[500px] pic-style"
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
              className="grid  grid-cols-3  gap-x-3 rounded-lg"
            >
              <div className="flex justify-center items-center ">
                <div>
                  <p className="ml-12">
                    Get flat
                    <span className="text-2xl font-bold">10%</span> Cashback
                  </p>
                  <h1 className="text-4xl font-extrabold text-center">
                    EXCITING DEALS ON TELEVISIONS
                  </h1>
                  <button className="btn btn-primary font-bold lg:ml-32 mt-5">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <img
                  className=" rounded-l-2xl w-full h-[500px] pic-style"
                  src={tv}
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
              className="grid  grid-cols-3  gap-x-3 rounded-lg"
            >
              <div className="flex justify-center items-center ">
                <div>
                  <p className="ml-12">
                    Top
                    <span className="text-2xl font-bold"> Sale </span> Best
                    <span className="text-2xl font-bold"> Deals </span>
                  </p>
                  <h1 className="text-4xl font-extrabold text-center uppercase">
                    SMART Headphone NEW COLLECTION!
                  </h1>
                  <button className="btn btn-primary font-bold lg:ml-32 mt-5">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <img
                  className=" rounded-l-2xl w-full h-[500px] pic-style"
                  src={headphone}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
