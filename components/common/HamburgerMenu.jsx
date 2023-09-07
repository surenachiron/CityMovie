"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Box,Divider,Button, Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { useStyles } from './style-header'

import { BiMenu } from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMiniHome} from 'react-icons/hi2';
import {RiMovieFill} from 'react-icons/ri';
import {MdArticle} from 'react-icons/md';
import {SiAboutdotme} from 'react-icons/si';


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

    const classes = useStyles()

    return(
        <>
                        <Box className={classes.buttonandboxhamburger}>
                    <Button varient="text" className={classes.buttonhamberger} sx={{
                        display: {
                            xs: "block",
                            md: "none"
                        }
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
                            color="redmain"
                        >
                            <Box className={classes.boxdrawer}>
                                <Box className={classes.closeiconhamburger}>
                                    <IconButton sx={{ mb: 2 }}>
                                        <AiOutlineClose color='white' size="1.5rem" onClick={toggleDrawer(false)} />
                                    </IconButton>
                                </Box>
                                <Divider sx={{ mb: 2, borderColor: '#ffffff54' }} />
                                <Box sx={{ mb: 2, mr: 5 }}>
                                        <Link href='/' onClick={toggleDrawer(false)}>
                                    <ListItemButton>
                                        <HiMiniHome color='#f44336' size="1.3rem" style={{margin: "-4px 8px 0 0"}} />
                                            <ListItemText primary="Home" />
                                    </ListItemButton>
                                        </Link>
                                        <Link href='/movie' onClick={toggleDrawer(false)}>
                                    <ListItemButton>
                                        <RiMovieFill color='#f44336' size="1.3rem" style={{margin: "-4px 8px 0 0"}} />
                                            <ListItemText primary="Movie" />
                                    </ListItemButton>
                                        </Link>
                                        <Link href='/blog' onClick={toggleDrawer(false)}>
                                    <ListItemButton>
                                        <MdArticle color='#f44336' size="1.3rem" style={{margin: "-4px 8px 0 0"}} />
                                            <ListItemText primary="Blog" />
                                    </ListItemButton>
                                        </Link>
                                        <Link href='/about' onClick={toggleDrawer(false)}>
                                    <ListItemButton>
                                        <SiAboutdotme color='#f44336' size="1.3rem" style={{margin: "-4px 8px 0 0"}} />
                                            <ListItemText primary="About" />
                                    </ListItemButton>
                                        </Link>
                                </Box>
                            </Box>
                        </Drawer>
                    </Button>
                </Box>
        </>
    )
}

export default HamburgerMenu