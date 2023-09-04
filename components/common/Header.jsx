"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles';

const hoverlink = {
    "&:hover": {
        pb: '1px',
        color: "red",
        transition: "all .1s",
        borderBottom: "1px solid #cecece"
    }
}

const theme = createTheme({
    palette: {
        ochre: {
            main: "#ffffff",
        },
    },
});

const Header = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "space-around", bgcolor: 'text.disabled', py: '.6rem', px: "1rem", borderRadius: "10px", my: "1rem", border: "1px solid #636363" }} theme={theme}>
            <Box sx={{ bgcolor: "error.main", px: ".6rem", borderRadius: "10px" }}>
                <Link href="/">
                    <Image alt='next' src={"/images/next.svg"} width={100} height={40} priority />
                </Link>
            </Box>
            <Box sx={{ display: "flex", justifyContentL: "center", alignItems: "center" }}>
                <Link href="/">
                    <Typography variant="subtitle1" mx={2} sx={hoverlink}>
                        Home
                    </Typography>
                </Link>
                <Link href="/movie">
                    <Typography variant="subtitle1" mx={2} sx={hoverlink}>
                        movie
                    </Typography>
                </Link>
                <Link href="/blog">
                    <Typography variant="subtitle1" mx={2} sx={hoverlink}>
                        blog
                    </Typography>
                </Link>
                <Link href="/about">
                    <Typography variant="subtitle1" mx={2} sx={hoverlink}>
                        about
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ display: "flex", justifyContentL: "center", alignItems: "center" }}>
                <Button theme={theme} variant='outlined' sx={{ border: "1px solid white", bgcolor: "black", borderRadius: "10px", color: "white" }} color='error'>
                    Log In
                </Button>
            </Box>
        </Box >
    );
}

export default Header;