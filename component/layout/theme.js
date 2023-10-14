import { createTheme, responsiveFontSizes } from "@mui/material";
import { red } from "@mui/material/colors";

let theme = createTheme({
    palette: {
        redMain: "#f44336",
        primary: {
            main: "#f44336"
        },
        secondary: {
            main: "#000000",
        },
        mode: 'dark',
    },
    status: {
        danger: red[400],
    },
});

theme = responsiveFontSizes(theme);

export default theme