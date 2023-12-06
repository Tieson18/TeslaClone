import { Close } from "@mui/icons-material"
import { Drawer, IconButton, List, ListItem, ListItemButton, Stack } from "@mui/material"
import PropTypes from "prop-types"

const SideBar = ({ isOpen, handleClose }) => {
    const sideBarLinks = [
        {
            name: "Existing Inventory"
        },
        {
            name: "Used Inventory"
        },
        {
            name: "Trade-in"
        },
        {
            name: "Cybertruck"
        },
        {
            name: "Roadster"
        },
        {
            name: "Semi"
        },
        {
            name: "Utilities"
        },
        {
            name: "Test Drive"
        },
        {
            name: "Charging"
        },

    ]


    return (
        <Drawer
            anchor={"right"}
            open={isOpen}
            onClose={handleClose}
            sx={{
                display: "block"
            }}
            PaperProps={{
                sx: {
                    maxWidth: 300,
                    width: "100%"
                }
            }}

        >
            <List>
                <Stack alignItems={"flex-end"} p={1}>
                    <IconButton size='medium' onClick={handleClose}>
                        <Close />
                    </IconButton>
                </Stack>
                {sideBarLinks.map((item) => (
                    <ListItem key={item.name} >
                        <ListItemButton sx={{
                            borderBottom: "1px solid rgba(0,0,0,0.2)",
                            padding: "0 0 10px 0",
                            "&:hover": {
                                background: "transparent",
                            },
                        }}
                        >{item.name}</ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    )
}
SideBar.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func
}

export default SideBar