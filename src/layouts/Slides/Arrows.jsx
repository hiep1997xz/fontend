import './SlideShow.css'

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span
        className="prev"
        onClick={prevSlide}
        style={{ marginLeft: '240px' }}>
        &#10094;
      </span>
      <span
        className="next"
        onClick={nextSlide}
        style={{ marginRight: '240px' }}>
        &#10095;
      </span>
    </div>
  )
}

export default Arrows
