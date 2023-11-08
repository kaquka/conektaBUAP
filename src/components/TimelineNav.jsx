
function TimelineNav({ data, changeSlide, activeSlide }) {
  return (
    <ul className="flex flex-col justify-center items-center h-full">
      {data.map((item, index) => (
        <li
          key={index}
          className={`cursor-pointer mb-4 p-2 relative flex items-center justify-start text-left ${index === activeSlide
            ? 'text-blue-600'
            : 'text-gray-500 hover:text-blue-600'
            }`}
          onClick={() => changeSlide(index)}
        >
          <div
            className={`w-full h-1 bg-blue-600 absolute bottom-0 transform scale-x-0 transition-transform duration-300 ease-in-out ${index === activeSlide ? 'scale-x-100' : ''
              }`}
          ></div>
          <span className="mr-2">{item.year}</span>
          <span className="text-gray-400 text-md">{data[index].title}</span>
        </li>
      ))}
    </ul>
  );
}

export default TimelineNav;
