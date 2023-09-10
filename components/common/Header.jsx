import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Typography, Grid } from '@mui/material'
import { Hoverlink, Linkbox, Parentboxicon, Boxicon, Buttonandboxhamburger,Buttonlogin} from './style-header'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {

    return (
        <Grid container mb="2rem" sx={{
            padding: { xs: ".1rem .5rem", md: ".6rem 1rem" }, borderRadius: "10px", marginTop: "1rem", border: "1px solid #636363"
        }}>
            <Grid xs={6} sm={6} md={3} lg={2}>
                <Parentboxicon>
                    <Boxicon>
                        <Link href="/" style={{dispaly:"flex"}}>
                            <Image
                                alt='next'
                                src={"/images/next.svg"}
                                width={120}
                                height={20}
                                sizes="100vw"
                                property
                            />
                        </Link>
                    </Boxicon>
                </Parentboxicon>
            </Grid>
            <Grid xs={6} sm={6} md={7} lg={8}>
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
                                    movie
                                </Hoverlink>
                            </Typography>
                        </Link>
                        <Link href="/blog">
                            <Typography variant="subtitle1" component="h3" mx={2}>
                                <Hoverlink>
                                    blog
                                </Hoverlink>
                            </Typography>
                        </Link>
                        <Link href="/about">
                            <Typography variant="subtitle1" component="h3" mx={2}>
                                <Hoverlink>
                                    about
                                </Hoverlink>
                            </Typography>
                        </Link>
                    </Linkbox>
                </Box>
                <HamburgerMenu />
            </Grid>
            <Grid md={2} lg={2} sx={{
                display: {
                    xs: "none",
                    md: "block"
                }
            }}>
                <Buttonandboxhamburger>
                        <Button variant='outlined' color='error' sx={{
                            border: "1px solid white",backgroundColor:"balck",borderRadius: "10px",color: "white",
                            }}>
                            Log In
                        </Button>
                </Buttonandboxhamburger>
            </Grid>
        </Grid >
    );
}

export default Header;