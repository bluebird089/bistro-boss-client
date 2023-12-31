import Cover from "../../Components/Cover/Cover";
import OrderCover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "../../Components/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ["salad", "pizza", "soup", "deserts", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={OrderCover} title="Order Food"></Cover>
            <Tabs
                defaultIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList className="flex justify-center gap-5 my-5">
                    <Tab>
                        <button>Salad</button>
                    </Tab>
                    <Tab>
                        <button>Pizza</button>
                    </Tab>
                    <Tab>
                        <button>Soup</button>
                    </Tab>
                    <Tab>
                        <button>Desert</button>
                    </Tab>
                    <Tab>
                        <button>Drinks</button>
                    </Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
