import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="#">
          <img src="/images/slider-badging.jpg" alt="Slider Image 1" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src="/images/slider-scale.jpg" alt="Slider Image 2" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src="/images/slider-badag.jpg" alt="Slider Image 3" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/sliderimage.png" alt="Slider Image 5" />
        </a>
      </Wrap>    
      <Wrap>
        <a href="#">
          <img src="/images/sliderimage2.png" alt="Slider Image 6" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/sliderimage8.png" alt="Slider Image 7" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/sliderimage7.png" alt="Slider Image 8" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/sliderimage6.png" alt="Slider Image 9" />
        </a>
      </Wrap>
      
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;