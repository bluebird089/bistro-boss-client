import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div>
            <SectionHeading
                subHeading={"What Our Client Say About Us"}
                heading={"Testimonials"}
            ></SectionHeading>
            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center text-center gap-3 m-10 p-10">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <h3>{review.details}</h3>
                                <p className="font-semibold text-yellow-600">
                                    {review.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
