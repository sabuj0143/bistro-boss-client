import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>

            
                <SectionTitle
                    subHeading={"My Cart"}
                    heading={"WANNA ADD MORE?"}
                >

                </SectionTitle>
           

            <div className="uppercase">
                <h3 className="text-3xl"> Total Items : {cart.length}</h3>
                <h3 className="text-3xl"> Total Prices : ${totalPrice}</h3>
                <button className="btn btn-warning btn-sm">pay</button>
            </div>
        </div>
    );
};

export default MyCart;