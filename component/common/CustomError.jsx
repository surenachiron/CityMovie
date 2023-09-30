import { Box, Typography } from "@mui/material";

const CustomError = () => {
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh" }}>
                <Box sx={{ borderRadius: "1.5rem", border: "1px solid rgb(185 28 28)", width: { xs: "100%", md: "50%" }, mx: "1rem", px: "1.25rem", py: "2rem" }}>
                    <Typography variant="h6" sx={{ color: "red" }}>Conection with the server failed.</Typography>
                    <Typography variant="body1" sx={{ my: "10px" }}>Please check your internet connection and try again</Typography>
                    <Typography variant="body1"><span style={{ color: "red" }}>( </span>make sure vpn is connected or dns is set<span style={{ color: "red" }}> )</span></Typography>
                </Box>
            </Box>
        </div>
    );
}

export default CustomError;