import { Link } from "react-router-dom";
import MenuItems from "../../../Components/MenuItems/MenuItems";

const MenuCategory = ({ item, category }) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-5">
                {item.map((item, idx) => (
                    <MenuItems key={idx} item={item}></MenuItems>
                ))}
            </div>
            <div className="flex justify-center my-5">
                <Link to={`/order/${category}`} className="btn">
                    Order Now
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
