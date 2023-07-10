import React from 'react';

const SmartProduct = () => {
  return (
    <div className="mx-32 py-32">
      <div className="flex gap-8">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex items-center bg-slate-100 rounded-lg py-16 px-14 "
        >
          <div className=" mr-3 ">
            <h1 className="text-sm">New Collections , New Trendy</h1>
            <p className="text-4xl mt-1 mb-4 font-bold uppercase">Smart tv</p>
            <p className="text-xs">Sale up to 25% off all in store</p>
          </div>
          <img
            className="h-40"
            src="https://www.pngitem.com/pimgs/m/358-3586092_smart-tv-40inch-smart-tv-samsung-hd-png.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex items-center bg-slate-100 rounded-lg py-16 px-14 "
        >
          <div className=" mr-3 ">
            <h1 className="text-sm">Top Brands , lowest price</h1>
            <p className="text-3xl mt-1 mb-4 font-bold uppercase">
              Smart Phone
            </p>
            <p className="text-xs">Free Shopping order over 10000 BDT</p>
          </div>
          <img
            className="h-40"
            src="https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SmartProduct;
