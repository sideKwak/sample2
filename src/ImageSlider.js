import React from 'react';
import Slider from 'react-slick';

const images = [
  { id: 1, src: 'path/to/image1.jpg' },
  { id: 2, src: 'path/to/image2.jpg' },
  { id: 3, src: 'path/to/image3.jpg' },
  // Add more images up to 10
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = () => (
  <div style={{ padding: '20px 0' }}>
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={`Slide ${image.id}`} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </Slider>
  </div>
);

export default ImageSlider;