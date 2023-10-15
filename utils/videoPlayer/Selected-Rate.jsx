import { useState } from 'react';
import { Box, Button, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import { FaRegSun, FaArrowLeft } from 'react-icons/fa'
import { ButtonIcon, } from './Style-VideoPlayer';
import classes from './Style-SelectedRate';
import { useDispatch, useSelector } from 'react-redux';
import { setRate, setOpenOptionsLists } from '@/redux/reducers/video-player';


const SelectedRate = () => {

    const dispatch = useDispatch()
    const OptionsListsStatus = useSelector(state => state.VideoPlayerReducer.openOptionsLists)
    const RateValue = useSelector(state => state.VideoPlayerReducer.rate)
    const isFullScreen = useSelector(state => state.VideoPlayerReducer.isFullScreen)

    const [openRateList, setOpenRateList] = useState(false);

    const options = ['0.5', '0.75', '1', '1.25', '1.5', '1.75', '2',];

    function handleShowOptions() {
        if (openRateList === true) dispatch(setOpenOptionsLists(false))
        else dispatch(setOpenOptionsLists(!OptionsListsStatus))
        setOpenRateList(false)
    };

    function handleHideSpeedRate() {
        dispatch(setOpenOptionsLists(false))
        setOpenRateList(true)
    };

    function handleShowSpeedRate() {
        dispatch(setOpenOptionsLists(true))
        setOpenRateList(false)
    };

    function handleShowRateList(event, index) {
        dispatch(setRate(options[index]))
        dispatch(setOpenOptionsLists(true))
        setOpenRateList(false)
    };

    return (
        <Box sx={classes.boxMainParent}>
            <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleShowOptions}>
                <FaRegSun fontSize="1.3rem" />
            </Button>
            {OptionsListsStatus ?
                <Box sx={isFullScreen === false ? classes.optionsLists : classes.optionsListsFullscreen}>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            onClick={handleHideSpeedRate}
                            sx={classes.listItemButtonStyle}
                        >
                            <ListItemText primary={`Speed ${RateValue}`} sx={classes.listItemTextStyle} />
                        </ListItemButton>
                    </List>
                </Box>
                : <></>}
            {openRateList ?
                <Box sx={isFullScreen === false ? classes.listRate : classes.listRateFullscreen}>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            onClick={handleShowSpeedRate}
                            sx={classes.listItemButtonStyle}
                        >
                            <FaArrowLeft fontSize="1rem" style={classes.iconArrowLeft} />
                            <ListItemText primary={"Back"} sx={classes.listItemTextStyle} />
                        </ListItemButton>
                        <Divider />
                        {options.map((rate, index) => (
                            <>
                                <ListItemButton
                                    selected={RateValue === rate}
                                    onClick={(event) => handleShowRateList(event, index)}
                                    sx={classes.listItemButtonStyle}
                                    key={index}
                                >
                                    <ListItemText primary={rate === "1" ? "Normal" : rate} sx={classes.listItemTextStyle} />
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