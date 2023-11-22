import MenuItems from "../../../Components/MenuItems/MenuItems";

const MenuCategory = ({ item }) => {
    return (
        <div className="grid grid-cols-2 gap-5">
            {item.map((item, idx) => (
                <MenuItems key={idx} item={item}></MenuItems>
            ))}
        </div>
    );
};

export default MenuCategory;
