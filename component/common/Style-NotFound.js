const classes = {
    BoxParent: {
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    ContentNotFound: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "fit-content",
    },
    Header404: {
        position: "absolute",
        bottom: "0",
        fontSize: { xs: "5rem", md: "6rem", letterSpacing: ".1em" },
    },
    HeaderNotFound: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "5px",
        letterSpacing: ".2em",
        fontSize: { xs: "1.8rem", md: "2.2rem" },
        zIndex: "1",
    },
    BoxBackHome: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "1rem",
    },
    ButtonBackHome: {
        border: "2px solid primary",
        borderRadius: "10px",
        color: "white",
        p: ".5rem .7rem",
    },
    IconBackHome: { marginRight: "10px" },
}

export default classes