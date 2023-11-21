import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import MenuItems from "../../../Components/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter((item) => item.category === "popular");

    return (
        <div>
            <SectionHeading
                heading="Popular Items"
                subHeading="From Our Menu"
            ></SectionHeading>
            <div className="grid grid-cols-2 gap-5">
                {popular.map((item) => (
                    <MenuItems key={item._id} menu={menu}></MenuItems>
                ))}
            </div>
        </div>
    );
};

export default PopularMenu;
