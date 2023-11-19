const MenuItems = ({ menu }) => {
    const { name, image, price, recipe } = menu;
    return (
        <div className="flex items-center gap-3">
            <img className="w-24 rounded-full" src={image} alt="" />
            <div>
                <p>{name}</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">{price}</p>
        </div>
    );
};

export default MenuItems;
