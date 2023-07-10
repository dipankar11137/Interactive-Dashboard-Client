import React from 'react';
import add from '../../../../../Images/Background/add.png';

const ExcitingDeals = () => {
  const textStyle = {
    transform: 'rotate(-70deg)',
    transformOrigin: 'left top',
    whiteSpace: 'nowrap',
  };
  return (
    <div className="mt-10">
      <div className="flex  bg-primary items-center mr-8 rounded-xl py-10 ">
        <div>
          <h1 className="text-5xl font-semibold text-white ml-2">
            Exciting Deals
          </h1>
        </div>
        <div>
          <p style={textStyle} className="text-2xl mt-40 text-neutral-200">
            Up to 40% off
          </p>
        </div>
        <div>
          <img className="w-[900px] h-[210px] ml-[-90px]" src={add} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExcitingDeals;
