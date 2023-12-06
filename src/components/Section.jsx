import { Box, Stack, Typography } from "@mui/material"
import DownArrow from "../assets/down-arrow.svg"
import CustomButton from "./CustomButton"
import PropTypes from "prop-types"
import "../styles/Section.css"
import { Fade } from "react-reveal"

const Section = ({ bgImg, title, description, leftBtn, RigthBtn, underlined }) => {
    return (
        <Box className="home__ground" component={"section"} sx={{
            background: `url(${bgImg}) center center / cover no-repeat`,
        }}>
            <Fade bottom>
                <Stack textAlign={"center"} pt={15}>
                    <Typography variant="h4" fontWeight={"400"}>{title}</Typography>
                    <Typography variant="p">{description}<Typography variant="p" sx={{ textDecoration: "underline" }}>{underlined}</Typography></Typography>
                </Stack>
            </Fade>
            <Stack>
                <Fade bottom>
                    <Stack direction={{ xs: "column", md: "row" }} className="button__group" mb={3} spacing={1}>
                        <CustomButton>{leftBtn}</CustomButton>
                        {RigthBtn &&
                            <CustomButton white>{RigthBtn}</CustomButton>
                        }
                    </Stack>
                </Fade>
                <img src={DownArrow} alt="" className="down__arrow" />
            </Stack>
        </Box>
    )
}

Section.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.string,
    leftBtn: PropTypes.string,
    RigthBtn: PropTypes.string,
    underlined: PropTypes.string,
}

export default Section