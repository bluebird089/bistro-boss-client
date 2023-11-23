const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full" src={image} alt="Food" />
            </figure>
            <p className="bg-black text-white absolute top-5 right-5 p-2 rounded-sm">
                ${price}
            </p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
