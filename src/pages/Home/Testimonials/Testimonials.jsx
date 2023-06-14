import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://bisto-boss-server-sabuj0143.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    return (
        <section className="my-20">
            <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-5xl mt-6" />
                            <p className="my-4">{review.details}</p>
                            <h3 className="text-3xl text-[#E7BF62] monospace">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;