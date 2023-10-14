const classes = {
    boxMainParent: { px: "1rem", },
    buttonTrailer: { border: "1px solid #7e7e7e" },
    boxSubParent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { lg: "100vh", sm: "70%", xs: "90%" },
        minHeight: { md: "80%", xs: "50%" },
        height: "fit-content",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: { lg: 4, xs: 2 },
    },
    boxHeaderTrailer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonClose: {
        width: "fit-content",
        minWidth: "auto",
        p: "0"
    },
    boxTrailerMovie: {
        width: "100%",
        height: { md: "350px", sm: "280px", xs: "250px" },
        my: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
}

export default classes