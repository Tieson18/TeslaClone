import { Box, Stack } from "@mui/material"
import Section from "../components/Section"
import ModelS from "../assets/model-s.jpg"
import ModelY from "../assets/model-y.jpg"
import Model3 from "../assets/model-3.jpg"
import ModelX from "../assets/model-x.jpg"
import SolarP from "../assets/solar-panel.jpg"
import SolarR from "../assets/solar-roof.jpg"
import Accessories from "../assets/accessories.jpg"


const Home = () =>
    return (
    <Box>
        <Stack>
            <Section bgImg={ModelS} title={"Model S"} description={"Order Online for "} underlined={"Touchless Delivery"} leftBtn={"Custom Order"} RigthBtn={"Existing Inventory"} />
            <Section bgImg={ModelY} title={"Model Y"} description={"Order Online for "} underlined={"Touchless Delivery"} leftBtn={"Custom Order"} RigthBtn={"Existing Inventory"} />
            <Section bgImg={Model3} title={"Model 3"} description={"Order Online for "} underlined={"Touchless Delivery"} leftBtn={"Custom Order"} RigthBtn={"Existing Inventory"} />
            <Section bgImg={ModelX} title={"Model X"} description={"Order Online for "} underlined={"Touchless Delivery"} leftBtn={"Custom Order"} RigthBtn={"Existing Inventory"} />
            <Section bgImg={SolarP} title={"Lowest Cost Solar Panels in America"} description={"Money-back guarantee"} leftBtn={"Order now"} RigthBtn={"learn more"} />
            <Section bgImg={SolarR} title={"Solar for New Roofs"} description={"Solar Roof Costs Less Than a New Roofs Plus Solar Panels"} leftBtn={"Order now"} RigthBtn={"learn more"} />
            <Section bgImg={Accessories} title={"Accessories"} description={""} leftBtn={"Order now"} />
        </Stack>
    </Box>
)
}

export default Home