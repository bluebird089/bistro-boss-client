import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import MenuBg from "../../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={MenuBg} title="Our Menu"></Cover>
        </div>
    );
};

export default Menu;
