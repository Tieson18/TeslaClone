import { Box, IconButton, Stack } from "@mui/material"
// import { Link } from "react-router-dom"
import TeslaLogo from "../assets/logo.svg"
import "../styles/Header.css"
import { Link, NavLink } from "react-router-dom"
import { Menu } from "@mui/icons-material"
import SideBar from "./SideBar"
import { useState } from "react"

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const navLinks = [
        {
            text: "Model S"
        },
        {
            text: "Model 3"
        },
        {
            text: "Model X"
        },
        {
            text: "Model Y"
        },
        {
            text: "Solar Roofs"
        },
        {
            text: "Solar Panels"
        },
    ]
    const rigthNavLinks = [
        {
            Rtext: "Shop"
        },
        {
            Rtext: "Tesla account"
        },

    ]

    return (
        <Box component={"header"}>
            <Stack component={"nav"}>
                <Link to={"/"} className="nav__logo">
                    <img src={TeslaLogo} alt="" />
                </Link>
                <Stack className="nav__links" display={{ xs: "none", md: "block" }}>
                    {navLinks.map((navLink, index) => (
                        <NavLink className={"center__menu"} key={index}>{navLink.text}</NavLink>
                    ))}
                </Stack>
                <Stack className="nav__links">
                    {rigthNavLinks.map((navLink, index) => (
                        <NavLink className="right__menu" key={index}>{navLink.Rtext}</NavLink>
                    ))}
                    <IconButton
                        onClick={() => setDrawerOpen(true)}
                    >
                        <Menu />
                    </IconButton>
                </Stack>
            </Stack>
            <SideBar
                isOpen={drawerOpen}
                handleClose={() => setDrawerOpen(false)}
            />
        </Box>
    )
}

export default Header