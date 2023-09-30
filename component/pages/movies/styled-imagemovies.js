import { styled } from "@mui/material";

export const HoverImage = styled('div')(() => ({
    width: "130px",
    height: "240px",
    zIndex: "10",
    border: "0px solid #535050",
    position: "absolute",
    "&:hover": {
        transition: "all .2s",
        border: "1px solid #535050 !important",
        backgroundColor: "#00000024",
        width: "150px !important",
        height: "260px !important",
        margin: "-4px 0"
    }
}));