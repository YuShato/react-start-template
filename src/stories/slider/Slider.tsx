import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UiSlider from './ui';
import { baseUrl } from './mockData';
import { ProductSliderProps } from './types';

const generatePreview = (i: number) => {
  return (
    <a>
      <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
    </a>
  );
};

class ProductSlider extends Component<ProductSliderProps> {
  render() {
    const { images } = this.props;

    const settings = {
      customPaging: generatePreview,
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    if (!Array.isArray(images)) {
      return null;
    }

    return (
      <UiSlider>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} width={404} height={404} />
            </div>
          ))}
        </Slider>
      </UiSlider>
    );
  }
}

export default ProductSlider;
