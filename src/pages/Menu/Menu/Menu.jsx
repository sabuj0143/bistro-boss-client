import { Helmet } from 'react-helmet-async';
import Cover from '../../Sherad/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offereds = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>

            {/* Main Cover */}
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>

            {/* Offered menu items */}
            <MenuCategory items={offereds}></MenuCategory>

            {/* Desserts menu items */}
            <MenuCategory items={desserts} title={"desserts"} img={dessertImg}></MenuCategory>

            {/* Pizza menu items */}
            <MenuCategory items={pizza} title={"pizzas"} img={pizzaImg}></MenuCategory>

            {/* Salads menu items */}
            <MenuCategory items={salad} title={"salads"} img={saladImg}></MenuCategory>

            {/* Soups menu items */}
            <MenuCategory items={soup} title={"soups"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;