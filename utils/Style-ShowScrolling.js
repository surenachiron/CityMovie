const classes = {
    boxMainParent: { position: "relative" },
    boxSubParent: {
        WebkitOverflowScrolling: "touch",
        overflowY: "hidden",
        overflowX: "scroll",
        whiteSpace: "normal",
        boxSizing: "border-box",
        pb: "10px",
        display: "flex"
    },
    boxHoverImage: {
        width: "130px",
        height: "240px",
        borderRadius: "10px",
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
    },
    boxData: {
        width: "140px",
        minWidth: "140px",
        m: "10px",
        p: "0",
        display: "inline-block"
    },
    link: { width: "100%" },
    boxImage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "250px"
    },
    image: { borderRadius: "10px" },
    boxTitle: { mt: "5px" }
}

export default classes