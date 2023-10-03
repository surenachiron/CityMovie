import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Typography, Grid } from '@mui/material'
import { Hoverlink, Linkbox, Parentboxicon, Boxicon, Buttonandboxhamburger, displayButtonLoginAndSearch } from './style-header'
import HamburgerMenu from './HamburgerMenu'
import SearchButton from '@/utils/search/SearchButton'
import { useDispatch, useSelector } from 'react-redux'
import SearchIniput from '@/utils/search/SearchIniput'
import { setBrowserWidth } from '@/redux/reducers/other'

const Header = () => {

    const paths = [{ address: '/', name: "Home" }, { address: '/movies', name: "Movies" }, { address: '/tv-shows', name: "TV Shows" }]

    const dispatch = useDispatch()
    const statuInput = useSelector(state => state.SearchReduser.statusInput)
    const focusInput = useSelector(state => state.SearchReduser.focusInput)
    const browserWidth = useSelector(state => state.Other.browserWidth)

    useEffect(() => {
        const upadatewidthplayermusic = () => {
            dispatch(setBrowserWidth(window.innerWidth))
        }
        window.addEventListener("resize", upadatewidthplayermusic);
        dispatch(setBrowserWidth(window.innerWidth))
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [<Header />, dispatch]);

    return (
        <>
            <Grid container sx={{
                padding: { xs: ".1rem .5rem", md: ".6rem 1rem" }, borderRadius: "10px", marginTop: "1rem", border: "1px solid #636363", mb: { lg: "2rem", xs: "1rem" }
            }}>
                {statuInput && browserWidth < 900 ? <HamburgerMenu /> : <>
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
                                {paths.map(path => (
                                    <Link href={path.address} key={path.address}>
                                        <Typography variant="subtitle1" component="h3" mx={2}>
                                            <Hoverlink>
                                                {path.name}
                                            </Hoverlink>
                                        </Typography>
                                    </Link>
                                ))}
                            </Linkbox>
                        </Box>
                        <HamburgerMenu />
                    </Grid>
                    <Grid item md={2} lg={2} sx={displayButtonLoginAndSearch}>
                        <Box sx={{position:"relative", right:"0",width: "100%",display: "flex",justifyContent: "end",alignItems: "center",height: "100%",}}>
                            {statuInput && browserWidth >= 900 ? 
                            <Box sx={{position:"absolute", right: {md:"7px",lg:"0"},backdropFilter: "blur(10px)",zIndex:"10"}}>
                                <SearchIniput />
                            </Box>
                            : ""}
                            {statuInput ? "" : <SearchButton />}
                         </Box>
                        <Buttonandboxhamburger>
                            <Button variant='outlined' color='error' sx={{
                                border: "1px solid white", backgroundColor: "balck", borderRadius: "10px", color: "white",fontSize:{lg:'0.875rem',md:"10px"}
                            }}>
                                Log In
                            </Button>
                        </Buttonandboxhamburger>
                    </Grid>
                </>}
            </Grid >
        </>
    );
}

export default Header;