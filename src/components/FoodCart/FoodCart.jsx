import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCart = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {menuId: _id, name, image, price, email: user.email};

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Add to Cart successfully',
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Places Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now !'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (

        <div className="card card-compact lilita w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-[300px]" src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 p-2 px-2 rounded bg-slate-900 text-white">${price}</p>
            <div className="card-body text-center items-center p-5">
                <h2 className="card-title">{name}</h2>
                <p className="py-4">{recipe}</p>
                <div>
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline btn-warning border-0 border-b-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;