"use client"
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    hoverlink: {
        "&:hover": {
            pb: '1px',
            color: "red",
            transition: "all .1s",
            borderBottom: "1px solid #cecece"
        }
    },
    maingrid: {
        backgroundColor: 'text.disabled',
        borderRadius: "10px",
        marginTop: "1rem",
        border: "1px solid #636363"
    },
    parentboxicon: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    boxicon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f44336",
        padding: "8px .6rem",
        borderRadius: "5px",
        width: "60%",
        height: "fit-content"
    },
    linkbox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    boxbuttonlogin: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        height: "100%"
    },
    buttonlogin: {
        border: "1px solid white",
        bgcolor: "black",
        borderRadius: "10px",
        color: "white",
    },
    buttonandboxhamburger: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
    },
    boxdrawer: {
        padding: "16px",
        height: "100%",
        backgroundColor: "black",
        color: "white"
    },
    closeiconhamburger: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        width: "100%"
    }
})