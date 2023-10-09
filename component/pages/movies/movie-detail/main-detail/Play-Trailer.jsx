import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Modal, Typography } from "@mui/material";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { setLoading, setTrailer } from "@/redux/reducers/trailermovie";
import Loading from "@/component/common/Loading";
import VideoPlayer from "@/utils/videoplayer/VideoPlayer";

const PlayTrailer = ({ image, id }) => {

    const dispatch = useDispatch()
    const loadingTrailer = useSelector(state => state.TrailerMovie.loading)
    const trailer = useSelector(state => state.TrailerMovie.trailer)
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const orginalId = id.slice(7, -1)

    const handleOpen = async () => {
        setOpen(true)
        const configuration = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }
        if ((trailer.length === 0 || trailer === undefined) || router.query.length === undefined) {
            dispatch(setLoading(true))
            await fetch(`/api/movie-trailer/${orginalId}`, configuration)
                .then((response) => response.json())
                .then((data) => {
                    dispatch(setTrailer(data))
                    dispatch(setLoading(false))
                })
                .catch((error) => dispatch(setLoading(false)))
            dispatch(setLoading(false))
        }
    };
    const handleClose = () => setOpen(false);

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

    return (
        <Box>

            <Button variant="text" color="inherit" onClick={handleOpen} sx={{ border: "1px solid #3e3e3e" }} >
                <BsPlayFill size={"1.8rem"} color="red" />
                Trailer
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
                            <Typography id="modal-modal-title" variant="h5" component="h4">
                                Trailer
                            </Typography>
                            <Button variant="text" color="inherit" sx={{ width: "fit-content", minWidth: "auto", p: "0" }} onClick={handleClose}>
                                <AiOutlineCloseCircle size={"1.5rem"} color="gray" />
                            </Button>
                        </Box>
                        <Box sx={{ width: "100%", height: { md: "350px", sm: "280px", xs: "250px" }, my: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                        </Box>
                    </Box>
                </Modal>
            </>
        </Box >
    );
}

export default PlayTrailer;