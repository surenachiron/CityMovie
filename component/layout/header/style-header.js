import { styled } from "@mui/material";

export const Hoverlink = styled('p')(() => ({
    "&:hover": {
        pb: '1px',
        color: "red",
        transition: "all .2s",
        borderBottom: "1px solid #cecece",
    }
}));

export const Linkbox = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
}));

export const Parentboxicon = styled('div')(() => ({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "100%"
}));

export const Boxicon = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f44336",
    padding: "2px",
    borderRadius: "5px",
    width: "60%",
    height: "fit-content"
}));

export const Buttonandboxhamburger = styled('div')(() => ({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
}));

export const Buttonlogin = styled('button')(() => ({
    border: "1px solid white",
    backgroundColor: theme.palette.black,
    borderRadius: "10px",
    color: "white",
}));

export const Boxdrawer = styled('div')(() => ({
    padding: "16px",
    width: "50vh",
    height: "100%",
    backgroundColor: "black",
    color: "white"
}));

export const Closeiconhamburger = styled('div')(() => ({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "100%"
}));

export const BoxIconHamburger = styled('div')(() => ({
    width: "50%",
    height: "42px",
    display: 'flex',
    justifyContent: "start",
    alignItems: "center",
    padding: "2px",
    borderRadius: "5px",
    backgroundColor: "#f44336",
}));