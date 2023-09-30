import { useRef, useState } from 'react';
import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute, } from 'react-icons/fa';
import { FaRotateLeft, FaRotateRight } from 'react-icons/fa6';
import { Box, Button, Slider, Tooltip, Typography } from '@mui/material';
import { ButtonIcon, ButtonIconFullscreen, IconPlayPouse, boxDetailsFullscreen, boxFullscreen, boxdetailplayvideo, controls, fetures, videoplayer } from './styled-videoplayer.js'
import { getCurrentTimeProgressBar, getDurationTimeProgressBar } from './getTime.js';
import SelectedRate from './Selected-Rate.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setFullScreen, setopenOprionsLists } from '@/redux/reducers/video-player.js';
import LoadingVideo from './LoadingVideo.jsx';

const VideoPlayer = ({ url, poster }) => {

    const RateValue = useSelector(state => state.VideoPlayerReduser.rate)
    const isFullScreen = useSelector(state => state.VideoPlayerReduser.isFullScreen)
    const dispatch = useDispatch()

    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const videProgressBar = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(true);
    const [currentTime, setCurrenTtime] = useState()
    const [durationTime, setDurationTime] = useState()
    const [valueProgressBar, setValueProgressBar] = useState(0)
    const [mouseStatus, setMouseStatus] = useState(false)
    const [loadingWaiting, setLoadingWaiting] = useState(false)

    /// for change show video to fullscren or normal
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
        dispatch(setopenOprionsLists(false))
        if (isPlaying === true) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    function handleonPause() {
        setIsPlaying(false)
        setLoadingWaiting(false)
    }

    /// for handle 10 second backward and forward
    function handlebackward() {
        videoRef.current.currentTime -= 10
        setValueProgressBar(valueProgressBar - 10)
    }
    function handleforward() {
        videoRef.current.currentTime += 10
        setValueProgressBar(valueProgressBar + 10)
    }

    /// when current time change we change progress bar to current time and we also handle change position progress bar 
    function updatevideoplaying(e) {
        setMouseStatus(false)
        setLoadingWaiting(false)
        videoRef.current.playbackRate = RateValue
        if (!mouseStatus) {
            setValueProgressBar(e.target.currentTime / e.target.duration * 100);
        }
        setCurrenTtime(getCurrentTimeProgressBar(e.target.currentTime))
        setDurationTime(getDurationTimeProgressBar(e.target.duration))
    }

    function handleProgressChange(event, newValue) {
        setValueProgressBar(newValue)
        videoRef.current.currentTime = newValue
    }

    function formousedownprogressbar() {
        setMouseStatus(!mouseStatus)
    }
    function formouseupprogressbar() {
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
        <Box sx={videoplayer} ref={videoContainerRef}>

            <video ref={videoRef} poster={poster} onClick={handlePlayPause} onPlay={() => { setIsPlaying(true) }} onPause={handleonPause} onTimeUpdate={e => updatevideoplaying(e)} onLoadedData={handleOnLoadData} onWaiting={handleWaitingVideo} style={{ height: "100%", width: "100%" }}>
                <source src={url} type="video/mp4" />
            </video>

            {loadingWaiting ?
                <LoadingVideo />
                : ""}

            {isFullScreen ?
                <Box sx={controls}>
                    <Slider
                        size="small"
                        max="100"
                        value={valueProgressBar}
                        defaultValue='0'
                        step="1"
                        aria-label="Small"
                        ref={videProgressBar}
                        sx={{ color: "#f44336", pb: "5px" }}
                        onChange={handleProgressChange}
                        onMouseDown={formousedownprogressbar}
                        onMouseUp={formouseupprogressbar}
                    />
                    <Box sx={boxDetailsFullscreen}>
                        <Box sx={boxFullscreen}>
                            <Box sx={{ mr: "1rem" }}>
                                <Tooltip title="Backward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handlebackward}>
                                        <FaRotateLeft fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                                <Button variant="text" color="inherit" sx={IconPlayPouse} onClick={handlePlayPause}>
                                    {isPlaying ? <FaPause fontSize="1.3rem" /> : <FaPlay fontSize="1.3rem" />}
                                </Button>
                                <Tooltip title="Forward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleforward}>
                                        <FaRotateRight fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                            </Box>
                            <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleVolumeChange}>
                                {volume ? <FaVolumeUp fontSize="1.3rem" /> : <FaVolumeMute fontSize="1.3rem" />}
                            </Button>
                            <Typography variant='body2' sx={{ ml: "1rem" }}>{currentTime ? currentTime + "/" : ""}</Typography>
                            <Typography variant='body2'>{durationTime ? durationTime : ""}</Typography>
                        </Box>
                        <Box sx={boxFullscreen}>
                            <SelectedRate />
                            <Button variant="text" color="inherit" sx={ButtonIconFullscreen} onClick={handleFullScreen}>
                                {isFullScreen ? <FaCompress fontSize="1.3rem" /> : <FaExpand fontSize="1.3rem" />}
                            </Button>
                        </Box>
                    </Box>
                </Box>
                :
                <>
                    <Box sx={fetures}>
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

                    <Box sx={controls}>
                        <Slider
                            size="small"
                            max="100"
                            value={valueProgressBar}
                            defaultValue='0'
                            step="1"
                            aria-label="Small"
                            ref={videProgressBar}
                            sx={{ color: "#f44336", pb: "5px" }}
                            onChange={handleProgressChange}
                            onMouseDown={formousedownprogressbar}
                            onMouseUp={formouseupprogressbar}
                        />
                        <Box sx={boxdetailplayvideo}>
                            <Typography variant='body2'>{currentTime ? currentTime : ""}</Typography>
                            <Box>
                                <Tooltip title="Backward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handlebackward}>
                                        <FaRotateLeft fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                                <Button variant="text" color="inherit" sx={IconPlayPouse} onClick={handlePlayPause}>
                                    {isPlaying ? <FaPause fontSize="1.3rem" /> : <FaPlay fontSize="1.3rem" />}
                                </Button>
                                <Tooltip title="Forward" placement="top">
                                    <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleforward}>
                                        <FaRotateRight fontSize="1.3rem" />
                                    </Button>
                                </Tooltip>
                            </Box>
                            <Typography variant='body2'>{durationTime ? durationTime : ""}</Typography>
                        </Box>
                    </Box>
                </>
            }

        </Box>
    );
};

export default VideoPlayer;