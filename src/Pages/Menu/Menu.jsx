import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import MenuBg from "../../assets/menu/banner3.jpg";
import DesertBg from "../../assets/menu/dessert-bg.jpeg";
import PizzaBg from "../../assets/menu/pizza-bg.jpg";
import SaladBg from "../../assets/menu/salad-bg.jpg";
import SoupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={MenuBg} title="Our Menu"></Cover>
            <SectionHeading
                subHeading="Don't miss"
                heading="Todays Offers"
            ></SectionHeading>
            <MenuCategory item={offered}></MenuCategory>
            <Cover img={DesertBg} title="Deserts"></Cover>
            <MenuCategory item={dessert}></MenuCategory>
            <Cover img={PizzaBg} title="Pizzas"></Cover>
            <MenuCategory item={pizza}></MenuCategory>
            <Cover img={SaladBg} title="Salad"></Cover>
            <MenuCategory item={salad}></MenuCategory>
            <Cover img={SoupBg} title="Soup"></Cover>
            <MenuCategory item={soup}></MenuCategory>
        </div>
    );
};

export default Menu;
