export const ButtonIcon = {
    width: "fit-content",
    minWidth: "auto",
    p: "0"
};

export const LoadingVideoStyle = {
    position: "absolute",
    top: "0",
    left: '0',
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: ".80",
    inset: "0px",
}

const classes = {
    boxMainParent: {
        position: "relative",
        height: "100%",
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
        backgroundColor: "black",
        '&:hover': {
            "& .MuiBox-root": {
                display: 'flex',
            }
        },
    },
    videoStyle: {
        height: "100%",
        width: "100%"
    },
    boxControlsVideo: {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        display: "none",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "10px",
    },
    sliderProgressVideo: {
        color: "#f44336",
        pb: "5px"
    },
    boxDetailsFullscreen: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    boxFullscreen: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    boxPlayPause: { mr: "1rem" },
    IconPlayPause: {
        width: "fit-content",
        minWidth: "auto",
        p: "0",
        mx: "1rem"
    },
    spanCurrentTime: { ml: "1rem" },
    buttonIconFullscreen: {
        width: "fit-content",
        minWidth: "auto",
        p: "0",
        ml: "1rem"
    },
    boxFeatures: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        display: "none",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "10px",
    },
    boxDetailPlayVideo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    ButtonIconFullscreen: {
        width: "fit-content",
        minWidth: "auto",
        p: "0",
        ml: "1rem"
    },

}

export default classes