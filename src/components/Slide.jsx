
function Slide({ data, isActive }) {
  return (
    <div className={`slide ${isActive ? 'active' : 'hidden'}`}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Add your content and styling here */}
    </div>
  );
}

export default Slide;
