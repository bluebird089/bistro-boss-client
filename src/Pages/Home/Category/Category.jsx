import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slide1 from "../../../assets/home/slide1.jpg";
import Slide2 from "../../../assets/home/slide2.jpg";
import Slide3 from "../../../assets/home/slide3.jpg";
import Slide4 from "../../../assets/home/slide4.jpg";
import Slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img className="w-full" src={Slide1} alt="" />
                <h3 className="text-4xl font-semibold text-white text-center -mt-20">
                    Salad
                </h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={Slide2} alt="" />
                <h3 className="text-4xl font-semibold text-white text-center -mt-20">
                    Pizza
                </h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={Slide3} alt="" />
                <h3 className="text-4xl font-semibold text-white text-center -mt-20">
                    Soup
                </h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={Slide4} alt="" />
                <h3 className="text-4xl font-semibold text-white text-center -mt-20">
                    Desert
                </h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={Slide5} alt="" />
                <h3 className="text-4xl font-semibold text-white text-center -mt-20">
                    Salad
                </h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;
