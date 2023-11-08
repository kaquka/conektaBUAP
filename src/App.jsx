import { useState, useEffect } from 'react';
import TimelineNav from './components/TimelineNav';
import SlidesContainer from './components/SlidesContainer';
import data from './data';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft' && activeSlide > 0) {
        changeSlide(activeSlide - 1);
      } else if (event.key === 'ArrowRight' && activeSlide < data.length - 1) {
        changeSlide(activeSlide + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [activeSlide]);

  return (
    <div className="flex h-screen">
      <div className="p-4 bg-gray-200 w-3/8">
        <TimelineNav data={data} changeSlide={changeSlide} activeSlide={activeSlide} />
      </div>
      <div className="p-4 w-full">
        <SlidesContainer data={data} activeSlide={activeSlide} changeSlide={changeSlide} />
      </div>
    </div>
  );
}

export default App;
