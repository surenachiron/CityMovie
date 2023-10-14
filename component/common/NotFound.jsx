import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { BsArrowLeftCircle } from 'react-icons/bs'
import classes from './Style-NotFound'

const NotFound = () => {
    return (
        <Box sx={classes.BoxParent}>
            <Box sx={classes.ContentNotFound}>
                <Typography variant="h1" color="primary" sx={classes.Header404}>404</Typography>
                <Typography variant="h4" sx={classes.HeaderNotFound}>
                    PAGE NOT FOUND
                </Typography>
            </Box>
            <Box sx={classes.BoxBackHome}>
                <Link href='/'>
                    <Button variant='outlined' color='error' sx={classes.ButtonBackHome}>
                        <BsArrowLeftCircle size={"1.7rem"} style={classes.IconBackHome} />
                        Back TO Home
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default NotFound;