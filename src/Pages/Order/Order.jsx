import Cover from "../../Components/Cover/Cover";
import OrderCover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");

    return (
        <div>
            <Cover img={OrderCover} title="Order Food"></Cover>
            <Tabs
                defaultIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList className="flex gap-5">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>something 1</TabPanel>
                <TabPanel>something 2</TabPanel>
                <TabPanel>something 3</TabPanel>
                <TabPanel>something 4</TabPanel>
                <TabPanel>something 5</TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
