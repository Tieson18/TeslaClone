import { Button } from "@mui/material"
import PropTypes from "prop-types"

const CustomButton = ({ children, white }) => {
    return (
        <Button
            variant="contained"
            sx={{
                bgcolor: white ? "white" : "rgba(23,26,32,0.8)",
                textTransform: "uppercase",
                borderRadius: 10,
                fontSize: "12px",
                height: "40px",
                width: "256px",
                color: white ? "black" : "white",
                opacity: 0.85,
            }}
        >
            {children}
        </Button>
    )
}

CustomButton.propTypes = {
    children: PropTypes.node,
    white: PropTypes.bool
}

export default CustomButton