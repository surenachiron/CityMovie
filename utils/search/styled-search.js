import { styled } from "@mui/material";

export const ParentInputSearchStyle = styled('div')(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}));

export const BoxInputSearchStyle = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: "transparent",
}));

export const sxParentInputSearchStyle = {
    width: { md: "300px", xs: "100%" },
}

export const sxBoxInputSearchStyle = {
    width: { md: "300px", xs: "100%" },
    border: { md: "1px solid #676767", xs: "0px" },
}

export const inputsearchstyle = {
    width: "100%",
    color: "#c9c9c9",
    background: "transparent",
    padding: "10px",
    fontSize: "1rem",
    border: "0",
    borderRight: "1px solid gray",
}

/// searchShowResult component

export const MainBox = styled('div')(() => ({
    position: "absolute",
    width: "100%",
    height: "fit-content",
    maxHeight: "30vh",
    overflowY: "auto",
    borderRadius: "10px",
    background: "transparent",
    backdropFilter: "blur(10px)",
    background: "#121212",
    border: "1px solid #676767",
    zIndex: "10"
}));

export const BoxStatus = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
}));

/// MapSearchShowResult component

export const ParentBoxSingleSearch = styled('div')(() => ({
    display: "flex",
    justifyContent: "start",
    alignItems: 'center',
    padding: "5px",
    borderBottom: "1px solid gray"
}));

export const BoxDetailsSingleSearch = styled('div')(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'start',
    marginLeft: "5px"
}));