import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    swipeToSlide: true, // Cho phép chuyển slide bằng swipe
    arrows: true, // Hiển thị các nút chuyển slide
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <div className="px-1">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1701854315034-eb81a6127064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            />
          </div>
        </div>
        <div>
          <div className="px-1">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1701854315034-eb81a6127064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            />
          </div>
        </div>
        <div>
          <div className="px-1">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1701854315034-eb81a6127064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            />
          </div>
        </div>
        <div>
          <div className="px-1">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1701854315034-eb81a6127064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            />
          </div>
        </div>
        <div>
          <div className="px-1">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1701854315034-eb81a6127064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            />
          </div>
        </div>
        <div>
          <div className="px-1">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1701854315034-eb81a6127064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Gallery;
