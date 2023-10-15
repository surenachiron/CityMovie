const classes = {
    HoverLink: {
        "&:hover": {
            pb: '1px',
            color: "red",
            transition: "all .2s",
            borderBottom: "1px solid #cecece",
        },
    },
    LinkBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    ParentBoxIcon: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    BoxIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px",
        width: "60%",
        height: "fit-content"
    },
    ButtonAndBoxHamburger: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        width: "100%",
    },
    BoxDrawer: {
        padding: "16px",
        width: "50vh",
        height: "100%",
        backgroundColor: "black",
        color: "white"
    },
    CloseIconHamburger: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        width: "100%"
    },
    BoxIconHamburger: {
        width: "50%",
        height: "42px",
        display: 'flex',
        justifyContent: "start",
        alignItems: "center",
        padding: "2px",
        borderRadius: "5px",
        backgroundColor: "#f44336",
    },
    DisplayButtonLoginAndSearch: {
        display: {
            xs: "none",
            md: "flex"
        },
        justifyContent: "end",
        alignItems: "center",
    },
    GridHeader: {
        padding: { xs: ".1rem .5rem", md: ".6rem 1rem" },
        borderRadius: "10px",
        marginTop: "1rem",
        border: "1px solid #636363",
        mb: { lg: "2rem", xs: "1rem" },
    },
    Image: {
        width: "100%",
        height: "100%",
        borderRadius: "5px"
    },
    GridPath: {
        py: { xs: '4px', sm: "2px" }
    },
    BoxPath: {
        display: {
            xs: "none",
            md: "inline"
        }
    },
    BoxSearch: {
        position: "relative",
        right: "0",
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        height: "100%",
    },
    BoxInputSearch: {
        position: "absolute"
        , right: { md: "7px", lg: "0" },
        backdropFilter: "blur(10px)",
        zIndex: "10"
    },
    ButtonLogin: {
        border: "1px solid white",
        borderRadius: "10px",
        color: "white",
        fontSize: { lg: '0.875rem', md: "10px" }
    },
}

export default classes