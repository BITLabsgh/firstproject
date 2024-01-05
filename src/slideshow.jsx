import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import t1 from "./images/t1.jpg"
import t2 from "./images/t2.jpg"
import t3 from "./images/t3.jpg"
import t4 from "./images/t4.jpg"

const Slider = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={t1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={t2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={t3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={t4} alt="" />
        </SwiperSlide>
      
       
      </Swiper>
    );
}
 
export default Slider;