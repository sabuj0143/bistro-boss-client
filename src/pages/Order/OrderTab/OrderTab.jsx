import FoodCart from "../../../components/FoodCart/FoodCart";


const OrderTab = ({items}) => {
    return (
        <div className='grid gap-4 py-4 md:grid-cols-3'>
            {
                items.map(item => <FoodCart
                    key={item._id}
                    item={item}
                ></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;