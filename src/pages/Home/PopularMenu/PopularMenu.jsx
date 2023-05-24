import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Sherad/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-16 mt-6">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mx-auto text-center mt-7">
                <button className="btn btn-outline btn-warning border-0 border-b-4">View all menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;