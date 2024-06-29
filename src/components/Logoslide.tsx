import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Logoslide = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div className="">
          <img
            src="/sbi.png"
            height={100}
            width={100}
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="/lic.png"
            height={100}
            width={100}
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="/hero.png"
            height={100}
            width={100}
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="/svf.png"
            height={100}
            width={85}
            className="rounded-full"
            alt=""
          />
        </div>
      </Slider>
    </>
  );
};

export default Logoslide;
