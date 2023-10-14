import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import SearchButton from '@/utils/search/SearchButton'
import SearchInput from '@/utils/search/SearchInput'
import { Box, Divider, Drawer, IconButton, ListItemButton, ListItemText } from '@mui/material'

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMiniHome } from 'react-icons/hi2';
import { RiMovieFill } from 'react-icons/ri';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { TbCategory2 } from 'react-icons/tb';
import classes from './Style-HamburgerMenu'


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

    const statusInput = useSelector(state => state.SearchReducer.statusInput)
    const browserWidth = useSelector(state => state.Other.browserWidth)

    return (
        <>
            <Box sx={classes.ButtonAndBoxHamburger}>
                {statusInput && browserWidth < 900 ? <SearchInput /> : <>
                    <Box sx={classes.BoxParent}>
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
                            <Box sx={classes.BoxDrawer}>
                                <Box sx={classes.CloseIconHamburger}>
                                    <Box sx={classes.BoxCloseIconHamburger}>
                                        <Box sx={classes.BoxIconHamburger}>
                                            <Link href='/' onClick={toggleDrawer(false)} style={{ height: "100%" }}>
                                                <Image
                                                    alt='next'
                                                    src={"/images/logo.png"}
                                                    width={75}
                                                    height={20}
                                                    sizes="100vw"
                                                    property="true"
                                                    style={classes.Image}
                                                />
                                            </Link>
                                        </Box>
                                        <Box sx={classes.BoxIconClose} onClick={toggleDrawer(false)}>
                                            <AiOutlineClose color='white' size="1.5rem" style={{ cursor: "pointer" }} />
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={classes.Divider} />
                                <Box sx={classes.BoxIconPath}>
                                    {paths.map(path => (
                                        <Link href={path.address} onClick={toggleDrawer(false)} key={path.address}>
                                            <ListItemButton>
                                                {path.name === "Home" &&
                                                    <HiMiniHome color='#f44336' size="1.3rem" style={classes.Icon} />
                                                }
                                                {path.name === "Movies" &&
                                                    <RiMovieFill color='#f44336' size="1.3rem" style={classes.Icon} />
                                                }
                                                {path.name === "TV Shows" &&
                                                    <MdOutlineVideoLibrary color='#f44336' size="1.3rem" style={classes.Icon} />
                                                }
                                                {path.name === "Category" &&
                                                    <TbCategory2 color='#f44336' size="1.3rem" style={classes.Icon} />
                                                }
                                                <ListItemText primary={path.name} />
                                            </ListItemButton>
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Drawer>
                    </Box>
                </>}
            </Box>
        </>
    )
}

export default HamburgerMenu