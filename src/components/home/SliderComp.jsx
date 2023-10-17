import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
            src="https://static.nike.com/a/images/t_default/f5a68ed6-eba2-439b-8247-f3ab63423922/air-force-1-lv8-gen%C3%A7-ayakkab%C4%B1s%C4%B1-BzS2Jg.png"
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
            src="https://static.nike.com/a/images/t_default/f5a68ed6-eba2-439b-8247-f3ab63423922/air-force-1-lv8-gen%C3%A7-ayakkab%C4%B1s%C4%B1-BzS2Jg.png"
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
            src="https://static.nike.com/a/images/t_default/f5a68ed6-eba2-439b-8247-f3ab63423922/air-force-1-lv8-gen%C3%A7-ayakkab%C4%B1s%C4%B1-BzS2Jg.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
