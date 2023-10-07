import { styled } from "@mui/material";

export const MainBoxPreviewGenresLarge = styled('div')(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "20px 15px",
        boxSizing: "border-box",
        paddingBottom: "10px",
        marginTop: "1rem"
    },
    [theme.breakpoints.up("sm")]: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "20px 15px",
        boxSizing: "border-box",
        paddingBottom: "10px",
        marginTop: "2rem"
    },
    [theme.breakpoints.up("md")]: {
        display: 'flex',
        overflowX: "scroll",
        overflowY: "hidden",
        marginTop: "3rem"
    }
}));

export const BoxContentPreviewGenresLarge = styled('div')(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        width: "100%",
        overflow: "initial",
        display: "inline-block",
        position: "relative",
    },
    [theme.breakpoints.up("md")]: {
        overflow: "hidden",
        position: "relative",
        marginRight: "1rem",
        width: "130px",
        height: "350px",
        borderRadius: "8px",
        transition: "all .5s",
        "&:hover": {
            borderRadius: "8px",
            width: "220px !important",
        },
    },
}));

export const BoxImagePreviewGenresLarge = styled('div')(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "150px"
    },
    [theme.breakpoints.up("md")]: {
        height: "100%",
    },
}));

export const BoxTitlePreviewGenresLarge = styled('div')(({ theme }) => ({
    position: "initial",
    width: "fit-content",
    height: "fit-content",
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000082",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
        borderRadius: "0",
        transition: "all .5s",
        "&:hover": {
            backgroundColor: "#00000000",
        }
    },

}));