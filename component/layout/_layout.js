import { Container, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
