import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setBrowserWidth } from '@/redux/reducers/other'
import { Box, Button, Typography, Grid } from '@mui/material'
import classes from './Style-Header.js'

import HamburgerMenu from './HamburgerMenu'
import SearchButton from '@/utils/search/SearchButton'
import SearchInput from '@/utils/search/SearchInput'

const Header = () => {

    const paths = [{ address: '/', name: "Home" }, { address: '/movies', name: "Movies" }, { address: '/tv-shows', name: "TV Shows" }, { address: '/category', name: "Category" }]

    const dispatch = useDispatch()
    const statusInput = useSelector(state => state.SearchReducer.statusInput)
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
            <Grid container sx={classes.GridHeader}>
                {statusInput && browserWidth < 900 ? <HamburgerMenu /> : <>
                    <Grid item xs={6} sm={6} md={3} lg={2}>
                        <Box sx={classes.ParentBoxIcon}>
                            <Link href="/" style={{ display: "flex" }}>
                                <Box sx={classes.BoxIcon}>
                                    <Image
                                        src="/images/logo.png"
                                        alt='logoCityMovie'
                                        width={120}
                                        height={20}
                                        sizes="100vw"
                                        priority="true"
                                        style={classes.Image}
                                    />
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={7} lg={8} sx={classes.GridPath}>
                        <Box component="div" sx={classes.BoxPath}>
                            <Box sx={classes.LinkBox}>
                                {paths.map(path => (
                                    <Link href={path.address} key={path.address}>
                                        <Typography variant="subtitle1" component="h3" mx={2} sx={classes.HoverLink}>
                                            {path.name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                        <HamburgerMenu />
                    </Grid>
                    <Grid item md={2} lg={2} sx={classes.DisplayButtonLoginAndSearch}>
                        <Box sx={classes.BoxSearch}>
                            {statusInput && browserWidth >= 900 &&
                                <Box sx={classes.BoxInputSearch}>
                                    <SearchInput />
                                </Box>
                            }
                            {!statusInput && <SearchButton />}
                        </Box>
                        <Box sx={classes.ButtonAndBoxHamburger}>
                            <Button variant='outlined' color='error' sx={classes.ButtonLogin}>
                                Log In
                            </Button>
                        </Box>
                    </Grid>
                </>}
            </Grid >
        </>
    );
}

export default Header;