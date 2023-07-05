import { MOBILE_MAP } from '../../../constants/media-query';
import { styled } from 'styled-components';

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 560px;
  overflow: hidden;
  margin-inline: auto;

  .slick-arrow {
    display: none !important;

    @media ${MOBILE_MAP} {
      display: block !important;

      &::before,
      &::after {
        color: #46a358;
      }
    }
  }

  .slick-slide {
    width: 100%;
    max-width: 404px;

    img {
      width: 404px;
      height: 404px;
      object-fit: cover;
      border-radius: 5px;

      @media (max-width: 1300px) {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
      }

      @media (max-width: 700px) {
        height: 100%;
        min-height: 300px;
        max-height: 404px;
      }
    }

    @media (max-width: 1300px) {
      width: 600px;
    }
  }

  .slick-slider {
    @media (max-width: 700px) {
      max-width: calc(100% - 80px);
      margin-inline: auto;
      max-width: 404px;
    }
  }

  .slick-list {
    width: 404px;
    overflow: hidden;
    margin-left: 146px;

    @media (max-width: 1450px) {
      margin-left: 120px;
    }

    @media (max-width: 1350px) {
      margin-left: 100px;
    }

    @media ${MOBILE_MAP} {
      margin-inline: auto;
    }

    @media (max-width: 700px) {
      width: inherit;
    }
  }

  .slick-dots.slick-thumb {
    display: grid !important;
    width: 100%;
    max-width: 100px;
    row-gap: 16px;
    bottom: 0;
    top: 0;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 5px;
    }

    li {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 80px;
    }

    img {
      width: 100px;
      height: 80px;
      object-fit: cover;
      max-height: 100px;

      @media (max-width: 1350px) {
        width: 80px;
      }
    }

    @media (max-width: 1350px) {
      max-width: 80px;
    }

    @media ${MOBILE_MAP} {
      display: none !important;
    }
  }

  @media (max-width: 1300px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const UiSlider = Object.assign(SliderWrapper, {});

export default UiSlider;
