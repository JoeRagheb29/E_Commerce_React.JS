import img1 from '../Imgs/ecommerce.jpg'
// import img2 from '../Imgs/ecommerce_1.webp'
import img3 from '../Imgs/g1.jpg'
import img4 from '../Imgs/g2.jpg'
import img5 from '../Imgs/g3.jpg'

function Slider() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img5} className="d-block w-100 h-600 " alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 h-600" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 h-600" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      </div>
    </>
  );
}

export default Slider;