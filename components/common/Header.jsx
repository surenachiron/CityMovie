"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Typography,Grid } from '@mui/material'
import { useStyles } from './style-header'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {

    const classes = useStyles()

    return (
        <Grid container className={classes.maingrid} sx={{padding:{xs: ".1rem .5rem",md: ".6rem 1rem"}}}>
            <Grid xs={6} sm={6} md={3} lg={2}>
                <Box className={classes.parentboxicon}>
                    <Box className={classes.boxicon}>
                        <Link href="/">
                            <Image
                                alt='next'
                                src={"/images/next.svg"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                property
                                style={{ width: '100%', height: '100%' }} />
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} sm={6} md={7} lg={8}>
                <Box component="div" sx={{
                    display: {
                        xs: "none",
                        md: "inline"
                    }
                }}>
                    <Box className={classes.linkbox}>
                        <Link href="/">
                            <Typography variant="subtitle1" component="h3" mx={2} className={classes.hoverlink}>
                                Home
                            </Typography>
                        </Link>
                        <Link href="/movie">
                            <Typography variant="subtitle1" component="h3" mx={2} className={classes.hoverlink}>
                                movie
                            </Typography>
                        </Link>
                        <Link href="/blog">
                            <Typography variant="subtitle1" component="h3" mx={2} className={classes.hoverlink}>
                                blog
                            </Typography>
                        </Link>
                        <Link href="/about">
                            <Typography variant="subtitle1" component="h3" mx={2} className={classes.hoverlink}>
                                about
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <HamburgerMenu />
            </Grid>
            <Grid md={2} lg={2} sx={{
                display: {
                    xs: "none",
                    md: "block"
                }
            }}>
                <Box className={classes.buttonandboxhamburger}>
                    <Button variant='outlined' color='error' className={classes.buttonlogin}>
                        Log In
                    </Button>
                </Box>
            </Grid>
        </Grid >
    );
}

export default Header;