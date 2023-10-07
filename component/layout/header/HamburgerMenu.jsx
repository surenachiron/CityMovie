import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Box, Divider, Drawer, IconButton, ListItemButton, ListItemText } from '@mui/material'
import { Buttonandboxhamburger, Boxdrawer, Closeiconhamburger, BoxIconHamburger } from './style-header'
import SearchButton from '@/utils/search/SearchButton'
import SearchIniput from '@/utils/search/SearchIniput'

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMiniHome } from 'react-icons/hi2';
import { RiMovieFill } from 'react-icons/ri';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { TbCategory2 } from 'react-icons/tb';


const HamburgerMenu = () => {

    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    };

    const paths = [{ address: '/', name: "Home" }, { address: '/movies', name: "Movies" }, { address: '/tv-shows', name: "TV Shows" }, { address: '/category', name: "Category" }]

    const statuInput = useSelector(state => state.SearchReduser.statusInput)
    const browserWidth = useSelector(state => state.Other.browserWidth)

    return (
        <>
            <Buttonandboxhamburger sx={{ height: "100%", }}>
                {statuInput && browserWidth < 900 ? <SearchIniput /> : <>
                    <Box sx={{
                        display: {
                            xs: "flex",
                            md: "none"
                        },
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}>
                        <SearchButton />
                        <IconButton
                            edge="start"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                        >
                            <BiMenu color='white' size="1.5rem"></BiMenu>
                        </IconButton>

                        <Drawer
                            anchor="left"
                            open={open}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            <Boxdrawer>
                                <Closeiconhamburger>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "12px", width: "100%" }}>
                                        <BoxIconHamburger>
                                            <Link href='/' onClick={toggleDrawer(false)} style={{ height: "100%" }}>
                                                <Image
                                                    alt='next'
                                                    src={"/brand/logo.png"}
                                                    width={75}
                                                    height={20}
                                                    sizes="100vw"
                                                    property="true"
                                                    style={{ width: "100%", height: " 100%" }}
                                                />
                                            </Link>
                                        </BoxIconHamburger>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} onClick={toggleDrawer(false)}>
                                            <AiOutlineClose color='white' size="1.5rem" style={{ cursor: "pointer" }} />
                                        </Box>
                                    </Box>
                                </Closeiconhamburger>
                                <Divider sx={{ mb: 2, borderColor: '#ffffff54', }} />
                                <Box sx={{ mb: 2, mr: 5 }}>
                                    {paths.map(path => (
                                        <Link href={path.address} onClick={toggleDrawer(false)} key={path.address}>
                                            <ListItemButton>
                                                {path.name === "Home" ? <HiMiniHome color='#f44336' size="1.3rem" style={{ margin: "-4px 8px 0 0" }} /> : ""}
                                                {path.name === "Movies" ? <RiMovieFill color='#f44336' size="1.3rem" style={{ margin: "-4px 8px 0 0" }} /> : ""}
                                                {path.name === "TV Shows" ? <MdOutlineVideoLibrary color='#f44336' size="1.3rem" style={{ margin: "-4px 8px 0 0" }} /> : ""}
                                                {path.name === "Category" ? <TbCategory2 color='#f44336' size="1.3rem" style={{ margin: "-4px 8px 0 0" }} /> : ""}
                                                <ListItemText primary={path.name} />
                                            </ListItemButton>
                                        </Link>
                                    ))}
                                </Box>
                            </Boxdrawer>
                        </Drawer>
                    </Box>
                </>}
            </Buttonandboxhamburger>
        </>
    )
}

export default HamburgerMenu