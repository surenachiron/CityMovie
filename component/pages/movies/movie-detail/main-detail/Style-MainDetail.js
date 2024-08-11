import { styled } from "@mui/material";

export const BeforeDot = styled('div')(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5px"
    },
    [theme.breakpoints.up("md")]: {
        display: "flex", justifyContent: "center", alignItems: "center", ":before": {
            fontSize: "1em", lineHeight: '1', content: '"•"', height: "100%", display: "flex", margin: "0 6px"
        }
    }
}));

export const classes = {
    boxMainParent: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center"
    },
    boxSubParent: {
        ml: { md: "2rem", xs: "0" },
        px: { xs: "10px", lg: "0" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        width: "100%"
    },
    boxSpanTitle: { mt: { xs: "1rem", md: "0" } },
    spanYear: { opacity: ".8" },
    boxMainDetails: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: { lg: "center", xs: "start" },
        flexDirection: { xs: "column", md: "row" },
        mt: { xs: "1rem", lg: "5px" }
    },
    boxCertificates: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    spanCertificate: {
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "0 2px",
        marginRight: "6px",
        color: "gray"
    },
    spanTypeMovie: { xs: "inline", md: "none" },
    spanLinkCategory: { mx: "2px" },
    spanTitleEpisodes: {
        display: { xs: "inline", md: "none", },
        mr: "5px",
    },
    boxEpisodes: {
        ml: '5px',
        display: { xs: "none", md: "inline" }
    },
    boxRatingTrailer: {
        display: "flex",
        mt: { xs: "1rem", md: '2rem' },
        alignItems: "center",
        justifyContent: "center"
    },
    boxRating: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mr: "1rem"
    },
    boxTextRating: { ml: "10px" },
    boxOverview: { mt: { xs: "1rem", md: '2rem' } },
    spanOverview: { mt: "10px", color: "#c8c8c8", fontWeight: "400 !important", },
}