import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setTrailer } from "@/redux/reducers/trailermovie";
import Loading from "@/component/common/_loading";
import VideoPlayer from "@/utils/videoplayer/VideoPlayer";

const PlayTrailer = ({ image, id }) => {

    const dispatch = useDispatch()
    const loadingTrailer = useSelector(state => state.TrailerMovie.loading)
    const trailer = useSelector(state => state.TrailerMovie.trailer)

    const orginalId = id.slice(7, -1)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { lg: "100vh", sm: "70%", xs: "90%" },
        minHeight: { md: "80%", xs: "50%" },
        height: "fit-content",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: { lg: 4, xs: 2 },
    };

    const [open, setOpen] = useState(false);
    const handleOpen = async () => {
        setOpen(true)
        const configuration = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        if (trailer.length === 0 || trailer === undefined) {
            dispatch(setLoading(true))
            await fetch(`/api/movie-trailer/${orginalId}`, configuration)
                .then((response) => response.json())
                .then((data) => {
                    dispatch(setTrailer(data))
                })
            dispatch(setLoading(false))
        }
    };
    const handleClose = () => setOpen(false);

    return (
        <Box>

            <Button variant="text" color="inherit" onClick={handleOpen} sx={{ border: "1px solid #3e3e3e" }} >
                <BsPlayFill size={"1.8rem"} color="red" />
                Play Trailer
            </Button>
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ px: "1rem", }}
                >
                    <Box sx={style}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Play Trailer
                            </Typography>
                            <Button variant="text" color="inherit" sx={{ width: "fit-content", minWidth: "auto", p: "0" }} onClick={handleClose}>
                                <AiOutlineCloseCircle size={"1.5rem"} color="gray" />
                            </Button>
                        </Box>
                        <Box sx={{ width: "100%", height: { md: "350px", sm: "280px", xs: "200px" }, my: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {loadingTrailer ? <Loading shadow={true} /> :
                                <>
                                    {trailer.resource ?
                                        <>
                                            {trailer.resource.encodings ?
                                                <VideoPlayer url={trailer.resource.encodings.find(tr => tr.definition === "480p") ? trailer.resource.encodings.find(tr => tr.definition === "480p").playUrl : trailer.resource.encodings.find(tr => tr.definition === "720p").playUrl} poster={image} />
                                                : "sory! we cant find any trailer for this movie"}
                                        </>
                                        : "sory! we cant find any trailer for this movie"}
                                </>
                            }
                            {/* <VideoPlayer
                                url="https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-small.mp4" poster={image} /> */}
                        </Box>
                    </Box>
                </Modal>
            </>
        </Box >
    );
}

export default PlayTrailer;