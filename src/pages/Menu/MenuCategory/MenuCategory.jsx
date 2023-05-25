import { Link } from "react-router-dom";
import Cover from "../../Sherad/Cover/Cover";
import MenuItem from "../../Sherad/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16 ">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="mx-auto text-center mt-5 my-8">
                    <button className="btn btn-outline btn-warning border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;