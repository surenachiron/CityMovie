import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFullScreen, setOpenOptionsLists } from '@/redux/reducers/video-player.js';

import { getCurrentTimeProgressBar, getDurationTimeProgressBar } from './getTime.js';
import SelectedRate from './Selected-Rate.jsx';
import LoadingVideo from './LoadingVideo.jsx';
import { Box, Button, Slider, Tooltip, Typography } from '@mui/material';

import classes, { ButtonIcon } from './Style-VideoPlayer.js'
import { FaRotateLeft, FaRotateRight } from 'react-icons/fa6';
import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute, } from 'react-icons/fa';

const VideoPlayer = ({ url, poster }) => {

    const RateValue = useSelector(state => state.VideoPlayerReducer.rate)
    const isFullScreen = useSelector(state => state.VideoPlayerReducer.isFullScreen)
    const dispatch = useDispatch()

    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const videProgressBar = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(true);
    const [currentTime, setCurrenTTime] = useState()
    const [durationTime, setDurationTime] = useState()
    const [valueProgressBar, setValueProgressBar] = useState(0)
    const [mouseStatus, setMouseStatus] = useState(false)
    const [loadingWaiting, setLoadingWaiting] = useState(false)

    /// for change show video to fullscreen or normal
    function handleFullScreen() {
        if (!isFullScreen) {
            videoContainerRef.current.requestFullscreen();
            dispatch(setFullScreen(true));
        } else {
            document.exitFullscreen();
            dispatch(setFullScreen(false));
        }
    };

    /// for change volume to mute or no
    function handleVolumeChange() {
        setVolume(!volume);
        videoRef.current.volume = !volume;
    };

    /// for handle play and pause video
    function handlePlayPause() {
        dispatch(setOpenOptionsLists(false))
        if (isPlaying === true) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    function handleOnPause() {
        setIsPlaying(false)
        setLoadingWaiting(false)
    }

    /// for handle 10 second backward and forward
    function handleBackward() {
        videoRef.current.currentTime -= 10
        setValueProgressBar(valueProgressBar - 10)
    }
    function handleForward() {
        videoRef.current.currentTime += 10
        setValueProgressBar(valueProgressBar + 10)
    }

    /// when current time change we change progress bar to current time and we also handle change position progress bar 
    function updateVideoPlaying(e) {
        setMouseStatus(false)
        setLoadingWaiting(false)
        videoRef.current.playbackRate = RateValue
        if (!mouseStatus) {
            setValueProgressBar(e.target.currentTime / e.target.duration * 100);
        }
        setCurrenTTime(getCurrentTimeProgressBar(e.target.currentTime))
        setDurationTime(getDurationTimeProgressBar(e.target.duration))
    }

    function handleProgressChange(event, newValue) {
        setValueProgressBar(newValue)
        videoRef.current.currentTime = newValue
    }

    function forMouseDownProgressbar() {
        setMouseStatus(!mouseStatus)
    }
    function forMouseUpProgressbar() {
        setMouseStatus(!mouseStatus)
    }

    /// for show loading when video is loading 
    function handleOnLoadData() {
        setLoadingWaiting(false)
    }
    function handleWaitingVideo() {
        setLoadingWaiting(true)
    }

    return (
        <Box sx={classes.boxMainParent} ref={videoContainerRef}>

            <video ref={videoRef} poster={poster} onClick={handlePlayPause} onPlay={() => { setIsPlaying(true) }} onPause={handleOnPause} onTimeUpdate={e => updateVideoPlaying(e)} onLoadedData={handleOnLoadData} onWaiting={handleWaitingVideo} style={classes.videoStyle}>
                <source src={url} type="video/mp4" />
            </video>

            {loadingWaiting &&
                <LoadingVideo />
            }

            {isFullScreen ?
                <Box sx={classes.boxControlsVideo}>
                    <Slider
                        size="small"
                        max="100"
                        value={valueProgressBar}
                        defaultValue='0'
                        step="1"
                        aria-label="Small"
                        ref={videProgressBar}
                        sx={classes.sliderProgressVideo}
                        onChange={handleProgressChange}
                        onMouseDown={forMouseDownProgressbar}
                        onMouseUp={forMouseUpProgressbar}
                    />
                    <Box sx={classes.boxDetailsFullscreen}>
                        <Box sx={classes.boxFullscreen}>
                            <Box sx={classes.boxPlayPause}>
                                <Tooltip title="Backward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleBackward}>
                                        <FaRotateLeft fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                                <Button variant="text" color="inherit" sx={classes.IconPlayPause} onClick={handlePlayPause}>
                                    {isPlaying ? <FaPause fontSize="1.3rem" /> : <FaPlay fontSize="1.3rem" />}
                                </Button>
                                <Tooltip title="Forward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleForward}>
                                        <FaRotateRight fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                            </Box>
                            <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleVolumeChange}>
                                {volume ? <FaVolumeUp fontSize="1.3rem" /> : <FaVolumeMute fontSize="1.3rem" />}
                            </Button>
                            <Typography variant='body2' sx={classes.spanCurrentTime}>{currentTime && currentTime + "/"}</Typography>
                            <Typography variant='body2'>{durationTime && durationTime}</Typography>
                        </Box>
                        <Box sx={classes.boxFullscreen}>
                            <SelectedRate />
                            <Button variant="text" color="inherit" sx={classes.buttonIconFullscreen} onClick={handleFullScreen}>
                                {isFullScreen ? <FaCompress fontSize="1.3rem" /> : <FaExpand fontSize="1.3rem" />}
                            </Button>
                        </Box>
                    </Box>
                </Box>
                :
                <>
                    <Box sx={classes.boxFeatures}>
                        <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleVolumeChange}>
                            {volume ? <FaVolumeUp fontSize="1.3rem" /> : <FaVolumeMute fontSize="1.3rem" />}
                        </Button>
                        <Box>
                            <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleFullScreen}>
                                {isFullScreen ? <FaCompress fontSize="1.3rem" /> : <FaExpand fontSize="1.3rem" />}
                            </Button>
                            <SelectedRate />
                        </Box>
                    </Box>

                    <Box sx={classes.boxControlsVideo}>
                        <Slider
                            size="small"
                            max="100"
                            value={valueProgressBar}
                            defaultValue='0'
                            step="1"
                            aria-label="Small"
                            ref={videProgressBar}
                            sx={classes.sliderProgressVideo}
                            onChange={handleProgressChange}
                            onMouseDown={forMouseDownProgressbar}
                            onMouseUp={forMouseUpProgressbar}
                        />
                        <Box sx={classes.boxDetailPlayVideo}>
                            <Typography variant='body2'>{currentTime && currentTime}</Typography>
                            <Box>
                                <Tooltip title="Backward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleBackward}>
                                        <FaRotateLeft fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                                <Button variant="text" color="inherit" sx={classes.IconPlayPause} onClick={handlePlayPause}>
                                    {isPlaying ? <FaPause fontSize="1.3rem" /> : <FaPlay fontSize="1.3rem" />}
                                </Button>
                                <Tooltip title="Forward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleForward}>
                                        <FaRotateRight fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                            </Box>
                            <Typography variant='body2'>{durationTime && durationTime}</Typography>
                        </Box>
                    </Box>
                </>
            }

        </Box>
    );
};

export default VideoPlayer;