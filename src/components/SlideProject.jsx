
import React from 'react';

function SlideProject({ data, isActive, changeSlide, index }) {
  return (
    <div className={`slide ${isActive ? 'active' : 'hidden'} bg-gray-100 rounded-lg p-6 shadow-md my-4 mx-8 relative`}>
      <div className="flex h-screen transition-opacity duration-500 ease-in-out">
        <div className="p-4 w-full">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <div className="flex">
            <div className="overflow-hidden m-4 rounded-lg">
              <img src={data.image} alt="Image 1" className="object-cover w-full h-90" />
            </div>
            <div className="p-4 w-1/2">
              <div className="font-semibold text-md">{data.subtitle}</div>
              <div className="text-sm">{data.text}</div>
            </div>
          </div>
          <div className="p-4">
            <div className="font-semibold text-md">{data.subtitle1}</div>
            <div className="text-sm">{data.text1}</div>
            <div className="font-semibold text-md">{data.subtitle2}</div>
            <div className="text-sm">{data.text2}</div>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={data.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 mx-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Abrir app ↗️
            </a>
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 mx-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Abrir repo 🏹
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideProject;
