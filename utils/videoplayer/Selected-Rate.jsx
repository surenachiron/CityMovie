import { useState } from 'react';
import { Box, Button, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import { FaRegSun, FaArrowLeft } from 'react-icons/fa'
import { ButtonIcon, ListRate, OprionsLists, ListItemTextStyle, ListItemButtonStyle, OprionsListsFullscreen, ListRateFullscreen } from './styled-videoplayer';
import { useDispatch, useSelector } from 'react-redux';
import { setRate, setopenOprionsLists } from '@/redux/reducers/video-player';


const SelectedRate = () => {

    const dispatch = useDispatch()
    const OptionsListsStatus = useSelector(state => state.VideoPlayerReduser.openOprionsLists)
    const RateValue = useSelector(state => state.VideoPlayerReduser.rate)
    const isFullScreen = useSelector(state => state.VideoPlayerReduser.isFullScreen)

    const [openRateList, setOpneRateList] = useState(false);

    const options = ['0.5', '0.75', '1', '1.25', '1.5', '1.75', '2',];

    function handleshowOptions() {
        if (openRateList === true) dispatch(setopenOprionsLists(false))
        else dispatch(setopenOprionsLists(!OptionsListsStatus))
        setOpneRateList(false)
    };

    function handleHideSpeedRate() {
        dispatch(setopenOprionsLists(false))
        setOpneRateList(true)
    };

    function handleShowSpeedRate() {
        dispatch(setopenOprionsLists(true))
        setOpneRateList(false)
    };

    function handleShowRateList(event, index) {
        dispatch(setRate(options[index]))
        dispatch(setopenOprionsLists(true))
        setOpneRateList(false)
    };

    return (
        <Box sx={{ ml: "10px", position: "relative" }}>
            <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleshowOptions}>
                <FaRegSun fontSize="1.3rem" />
            </Button>
            {OptionsListsStatus ?
                <Box sx={isFullScreen === false ? OprionsLists : OprionsListsFullscreen}>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            onClick={handleHideSpeedRate}
                            sx={{ p: "0 0 0 7px", fontSize: "10px" }}
                        >
                            <ListItemText primary={`Speed ${RateValue}`} sx={{
                                "& .MuiListItemText-primary": {
                                    fontSize: { xs: ".7rem", md: ".8rem" },
                                }
                            }} />
                        </ListItemButton>
                    </List>
                </Box>
                : <></>}
            {openRateList ?
                <Box sx={isFullScreen === false ? ListRate : ListRateFullscreen}>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            onClick={handleShowSpeedRate}
                            sx={ListItemButtonStyle}
                        >
                            <FaArrowLeft fontSize="1rem" style={{ marginRight: "5px" }} />
                            <ListItemText primary={"Back"} sx={ListItemTextStyle} />
                        </ListItemButton>
                        <Divider />
                        {options.map((rate, index) => (
                            <>
                                <ListItemButton
                                    selected={RateValue === rate}
                                    onClick={(event) => handleShowRateList(event, index)}
                                    sx={ListItemButtonStyle}
                                    key={index}
                                >
                                    <ListItemText primary={rate === "1" ? "Normal" : rate} sx={ListItemTextStyle} />
                                </ListItemButton>
                                <Divider />
                            </>
                        ))}
                    </List>
                </Box>
                : <></>}
        </Box>
    );
}

export default SelectedRate