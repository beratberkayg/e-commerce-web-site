import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">En kaliteli ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              dolor, praesentium fugiat ducimus illum cum.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-slate-500">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2868bc01-00d1-42a4-9e6e-299727f4787a/air-force-1-impact-next-nature-gen%C3%A7-ayakkab%C4%B1s%C4%B1-RrlFFq.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">En kaliteli ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              dolor, praesentium fugiat ducimus illum cum.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-slate-500">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
