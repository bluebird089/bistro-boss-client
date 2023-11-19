import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-section bg-fixed">
            <div className="bg-black bg-opacity-60 p-20">
                <SectionHeading 
                    subHeading={"Check It Out"}
                    heading={"Featured"}
                ></SectionHeading>
                <div className="flex items-center gap-6">
                    <div className="w-1/2">
                        <img className="w-full" src={featuredImg} alt="" />
                    </div>
                    <div className="w-1/2 text-white">
                        <h3 className="text-2xl">Check It Out</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dolores nesciunt, voluptate quod sequi
                            expedita voluptatibus dicta neque, animi enim totam
                            quidem dolorem quas. Incidunt possimus asperiores
                            repellat libero suscipit quos.
                        </p>
                        <button className="btn btn-outline">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
