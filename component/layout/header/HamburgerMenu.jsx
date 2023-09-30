import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Divider, Drawer, IconButton, ListItemButton, ListItemText } from '@mui/material'
import { Buttonandboxhamburger, Boxdrawer, Closeiconhamburger, BoxIconHamburger } from './style-header'

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMiniHome } from 'react-icons/hi2';
import { RiMovieFill } from 'react-icons/ri';
import { MdArticle } from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';


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

    return (
        <>
            <Buttonandboxhamburger sx={{ height: "100%" }}>
                <Box sx={{
                    display: {
                        xs: "flex",
                        md: "none"
                    },
                    justifyContent: "center",
                    alignItems: "center",
                }}>
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
                                <Link href='/' onClick={toggleDrawer(false)}>
                                    <ListItemButton>
                                        <HiMiniHome color='#f44336' size="1.3rem" style={{ margin: "-4px 8px 0 0" }} />
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                </Link>
                                <Link href='/movies' onClick={toggleDrawer(false)}>
                                    <ListItemButton>
                                        <RiMovieFill color='#f44336' size="1.3rem" style={{ margin: "-4px 8px 0 0" }} />
                                        <ListItemText primary="Movies" />
                                    </ListItemButton>
                                </Link>
                            </Box>
                        </Boxdrawer>
                    </Drawer>
                </Box>
            </Buttonandboxhamburger >
        </>
    )
}

export default HamburgerMenu