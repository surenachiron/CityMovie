const classes = {
    boxMainParent: {
        position: "absolute", bottom: "0", display: { xs: "flex", md: "none" }, width: "100%", justifyContent: "center",
    },
    boxSubParent: {
        display: { xs: "flex", md: "none" },
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
        backgroundColor: "#00000070",
        backdropFilter: "blur(4px)",
        p: "10px",
        borderRadius: "10px",
    },
    boxMainDetail: { textAlign: "start" },
    boxReleaseDateRating: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
    },
    spanReleaseDate: { color: "#bbbbbb", my: "7px" },
    spanRating: {
        width: "fit-content",
        minWidth: "auto",
        p: "0 4px",
        mx: "10px",
        cursor: "auto"
    },
    spanGenre: {
        mr: "2px",
        display: "inline",
        color: "#bbbbbb"
    },
    boxPlayTrailerMore: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "end",
        height: "100%"
    },
    boxPlayTrailer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "start",
        height: "100%"
    },
    boxMore: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "end",
        height: "100%"
    },
    buttonMore: {
        p: "4px",
        background: "red",
        backdropFilter: "blur(5px)",
        borderRadius: "25px"
    }
}

export default classes