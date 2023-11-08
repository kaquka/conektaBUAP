
import React from 'react';

function SlideInfo({ data, isActive, changeSlide, index }) {
  return (
    <div className={`slide ${isActive ? 'active' : 'hidden'} bg-gray-100 rounded-lg p-6 shadow-md my-4 mx-8 relative`}>
      <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
      <div className="flex justify-center items-center">
        <div className="w-2/5">
          <p className="text-gray-700 text-dm">{data.text}</p>
        </div>
        <div className="justify-center items-center w-3/5 align-middle">
          <img src={data.image} alt="Image 1" className="object-cover max-w-full max-h-80 rounded-lg" />
        </div>
      </div>

    </div>
  );
}

export default SlideInfo;
