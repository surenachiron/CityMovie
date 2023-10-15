/// SearchInput component

export const classesSearchInput = {
    boxMainParentInputSearch: {
        width: { md: "300px", xs: "100%" },
        position: "relative"
    },
    boxParentInputSearch: {
        width: { md: "300px", xs: "100%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    boxParentInputSearch: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        background: "transparent",
        width: { md: "300px", xs: "100%" },
        border: { md: "1px solid #323232", xs: "0px" },
    },
    boxInputSearch: {
        width: "100%",
        color: "#c9c9c9",
        background: "transparent",
        padding: "10px",
        fontSize: "1rem",
        border: "0",
        borderRight: "1px solid #323232",
    },
    iconClose: { cursor: "pointer", margin: "0 5px" },
}

/// searchShowResult component

export const classesSearchShowResult = {
    mainBox: {
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
    },
    boxStatusError: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        color: "redMain"
    },
    boxStatusInfo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
    }
}

/// MapSearchShowResult component

export const classesMapSearchShowResult = {
    boxParentBoxSingleSearch: {
        display: "flex",
        justifyContent: "start",
        alignItems: 'center',
        padding: "5px",
        borderBottom: "1px solid gray"
    },
    boxDetailsSingleSearch: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'start',
        marginLeft: "5px"
    },
    spanTitle: { color: "white" },
    spanYear: { color: "gray" }
}

/// SearchButton component

export const classesSearchButton = {
    boxButtonSearch: { mr: { xs: "1rem", md: "1rem" } }
}