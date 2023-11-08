
import Slider from 'react-slick';

function Carousel({ images }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} className="object-cover w-full h-36" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
