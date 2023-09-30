import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        redmain: "#f44336",
        white: "#ffffff",
        black: "#000",
        mode: 'dark',
    },
});

theme.typography.h4 = {
    fontSize: "2.2rem",
    [theme.breakpoints.only('xs')]: {
        fontSize: '1.4rem',
    },
};

export default theme