// import { Helmet } from "react-helmet-async";
// import Cover from "../../Components/Cover/Cover";
// import MenuBg from "../../assets/menu/banner3.jpg";
// import useMenu from "../../hooks/useMenu";
// import SectionHeading from "../../Components/SectionHeading/SectionHeading";
// import MenuCategory from "./MenuCategory/MenuCategory";

// const Menu = () => {
//     const [menu] = useMenu();
//     const offered = menu.filter((item) => item.category === "offered");
//     const soup = menu.filter((item) => item.category === "soup");
//     const salad = menu.filter((item) => item.category === "salad");
//     const dessert = menu.filter((item) => item.category === "dessert");
//     const pizza = menu.filter((item) => item.category === "pizza");

//     return (
//         <div>
//             <Helmet>
//                 <title>Bistro Boss | Menu</title>
//             </Helmet>
//             <Cover img={MenuBg} title="Our Menu"></Cover>
//             <SectionHeading
//                 subHeading="Don't miss"
//                 heading="Todays Offers"
//             ></SectionHeading>
//             <MenuCategory item={offered}></MenuCategory>
//         </div>
//     );
// };

// export default Menu;
