import SlideInfo from './SlideInfo';
import SlideProject from './SlideProject';

function SlidesContainer({ data, activeSlide, changeSlide }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {data.map((item, index) => (
        item.type === 'SlideInfo' ? (
          <SlideInfo
            key={index}
            data={item}
            isActive={index === activeSlide}
            changeSlide={changeSlide}
            index={index}
          />
        ) : (
          <SlideProject
            key={index}
            data={item}
            isActive={index === activeSlide}
            changeSlide={changeSlide}
            index={index}
          />
        )
      ))}
    </div>
  );
}

export default SlidesContainer;
