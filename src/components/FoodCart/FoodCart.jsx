

const FoodCart = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (

        <div className="card card-compact lilita w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-[300px]" src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 p-2 px-2 rounded bg-slate-900 text-white">${price}</p>
            <div className="card-body text-center items-center p-5">
                <h2 className="card-title">{name}</h2>
                <p className="py-4">{recipe}</p>
                <div>
                    <button className="btn btn-outline btn-warning border-0 border-b-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;