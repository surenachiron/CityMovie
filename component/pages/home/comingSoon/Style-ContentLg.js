const classes = {
    beforeDot: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ":before": {
            fontSize: "1em",
            lineHeight: '1',
            content: '"•"',
            width: "100%",
            height: "100%",
            display: "flex",
            mx: "6px"
        }
    },
    boxMainParent: {
        width: "100%",
        height: "100%",
        padding: '23px',
        position: "absolute",
        textAlign: "start",
        background: `linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 72%)`,
        borderRadius: "16px",
        display: { md: "flex", xs: "none" }
    },
    boxSubParent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        width: "100%"
    },
    mainDetails: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: { lg: "center", xs: "start" },
        flexDirection: "row",
        mt: "5px"
    },
    boxCertificatesReleaseDate: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    spanCertificates: {
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "0 2px",
        marginRight: "6px",
        color: "gray"
    },
    spanGenre: { mx: "2px" },
    spanEpisodes: { ml: '5px' },
    boxOverview: { mt: "1rem", width: "50%" },
    spanSummary: { mt: "10px", color: "#c8c8c8", fontWeight: "400 !important", },
    boxTrailerMore: { display: "flex", mt: "1rem", alignItems: "center", justifyContent: "center" },
    ButtonTrailer: { mr: "1rem" },
    buttonMore: { p: "4px", backdropFilter: "blur(5px)", }
}

export default classes