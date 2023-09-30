import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { BsArrowLeftCircle } from 'react-icons/bs'

const Custom404 = () => {

    return (
        <>
            <Head>
                <title>404 Not-Found</title>
                <meta name="description" content="404 page for each page that not found" />
            </Head>
            <Box sx={{ width: "100%", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", width: "fit-content", }}>
                    <Typography variant="h1" sx={{ color: "redmain", position: "absolute", bottom: "0", fontSize: { xs: "5rem", md: "6rem", letterSpacing: ".1em" }, }}>404</Typography>
                    <Typography variant="h4" sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "5px", letterSpacing: ".2em", fontSize: { xs: "1.8rem", md: "2.2rem" }, zIndex: "1" }}>
                        PAGE NOT FOUND
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "1rem" }}>
                    <Link href='/'>
                        <Button variant='outlined' color='error' sx={{ border: "2px solid redmain", borderRadius: "10px", color: "white", p: ".5rem .7rem" }}>
                            <BsArrowLeftCircle size={"1.7rem"} style={{ marginRight: "10px" }} />
                            Back TO Home
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default Custom404;