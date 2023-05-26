import FoodCart from "../../../components/FoodCart/FoodCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid gap-4 py-4 md:grid-cols-3'>
                        {
                            items.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;