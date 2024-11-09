import { Swiper, SwiperSlide } from "swiper/react";

import arr1 from "../assets/arrival1.jpg";
import arr2 from "../assets/arrival2.jpg";
import arr3 from "../assets/arival3.jpg";
import arr4 from "../assets/arival4.jpg";
import arr5 from "../assets/arrival5.jpg";
import arr6 from "../assets/arrival6.jpg";
import arr7 from "../assets/arrival7.jpg";
import arr8 from "../assets/arrival8.jpg";
import { EffectCards, Navigation, Pagination,EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const Corousel = () => {
  return (
    <div className="mainbox text-white pt-5  w-full">
      <div className="sm:container mx-auto">
        <div className="headlinerbox mt-5 ">
          <div className="head headbox flex justify-center item-center">
            <div className="headline">
              <h1 className="sm:text-6xl text-4xl underline underline-offset-8 decoration-red-800">Our New Arrivals</h1>
            </div>
          </div>
        </div>
        <div className="arrivalbox-content mt-5 mb-5 mx-auto w-full flex justify-center items-center  ">
          <div className="inner-arrival-box mx-auto w-full mt-8  px-5 py-5 flex justify-center items-center   ">
            <Swiper
              modules={[Navigation, Pagination, EffectCards,EffectCoverflow]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              loop="true"
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              effect={"coverflow"}
              coverflowEffect={{
                depth:100,
                rotate:10,
                stretch:1,
                modifier:1,
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                
              }}
            >
              <SwiperSlide>
                <img src={arr1} alt="aaq" className="fitcontent" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={arr2} alt="aaq" className="fitcontent"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={arr3} alt="aaq" className="fitcontent"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={arr4} alt="aaq" className="fitcontent"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={arr5} alt="aaq" className="fitcontent"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={arr6} alt="aaq" className="fitcontent"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={arr7} alt="aaq" className="fitcontent"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={arr8} alt="aaq" className="fitcontent"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
