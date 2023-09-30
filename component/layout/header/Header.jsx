import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Typography, Grid } from '@mui/material'
import { Hoverlink, Linkbox, Parentboxicon, Boxicon, Buttonandboxhamburger } from './style-header'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {

    return (
        <Grid container sx={{
            padding: { xs: ".1rem .5rem", md: ".6rem 1rem" }, borderRadius: "10px", marginTop: "1rem", border: "1px solid #636363", mb: { lg: "2rem", xs: "1rem" }
        }}>
            <Grid item xs={6} sm={6} md={3} lg={2}>
                <Parentboxicon>
                    <Link href="/" style={{ dispaly: "flex" }}>
                        <Boxicon>
                            <Image
                                src="/brand/logo.png"
                                alt='logoCityMovie'
                                width={120}
                                height={20}
                                sizes="100vw"
                                priority="true"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Boxicon>
                    </Link>
                </Parentboxicon>
            </Grid>
            <Grid item xs={6} sm={6} md={7} lg={8} sx={{ py: { xs: '4px', sm: "2px" } }}>
                <Box component="div" sx={{
                    display: {
                        xs: "none",
                        md: "inline"
                    }
                }}>
                    <Linkbox>
                        <Link href="/">
                            <Typography variant="subtitle1" component="h3" mx={2}>
                                <Hoverlink>
                                    Home
                                </Hoverlink>
                            </Typography>
                        </Link>
                        <Link href="/movies">
                            <Typography variant="subtitle1" component="h3" mx={2}>
                                <Hoverlink>
                                    movies
                                </Hoverlink>
                            </Typography>
                        </Link>
                    </Linkbox>
                </Box>
                <HamburgerMenu />
            </Grid>
            <Grid item md={2} lg={2} sx={{
                display: {
                    xs: "none",
                    md: "block"
                },
            }}>
                <Buttonandboxhamburger>
                    <Button variant='outlined' color='error' sx={{
                        border: "1px solid white", backgroundColor: "balck", borderRadius: "10px", color: "white",
                    }}>
                        Log In
                    </Button>
                </Buttonandboxhamburger>
            </Grid>
        </Grid >
    );
}

export default Header;