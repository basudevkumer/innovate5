import Slider from "react-slick";

// import for images
import SliderIconOne from "../assets/bannaricon1.png";
import SliderIconTwo from "../assets/bannaricon2.png";
import SliderIconThree from "../assets/bannaricon3.png";
import SliderIconFour from "../assets/bannaricon4.png";
import SliderIconFive from "../assets/bannaricon5.png";
import SliderIconSix from "../assets/bannaricon6.png";

const Sliders = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <section className="py-[80px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="w-full">
          <Slider {...settings} className="">
            <div>
              <img src={SliderIconOne} alt="slider images" />
            </div>
            <div>
              <img src={SliderIconTwo} alt="slider images" />
            </div>
            <div>
              <img src={SliderIconThree} alt="slider images" />
            </div>
            <div>
              <img src={SliderIconFour} alt="slider images" />
            </div>
            <div>
              <img src={SliderIconFive} alt="slider images" />
            </div>
            <div>
              <img src={SliderIconSix} alt="slider images" />
            </div>
            <div>
              <img src={SliderIconOne} alt="slider images" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Sliders;
