import { useEffect, useState } from "react";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import MenuItems from "../../../Components/MenuItems/MenuItems";

const PopularMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularItem = data.filter(
                    (item) => item.category === "popular"
                );
                setMenus(popularItem);
            });
    }, []);
    return (
        <div>
            <SectionHeading
                heading="Popular Items"
                subHeading="From Our Menu"
            ></SectionHeading>
            <div className="grid grid-cols-2 gap-5">
                {menus.map((menu) => (
                    <MenuItems key={menu._id} menu={menu}></MenuItems>
                ))}
            </div>
        </div>
    );
};

export default PopularMenu;
