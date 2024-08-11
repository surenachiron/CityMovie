import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Modal, Typography } from "@mui/material";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { setLoading, setTrailer } from "@/redux/reducers/trailerMovie";
import Loading from "@/component/common/Loading";
import VideoPlayer from "@/utils/videoPlayer/VideoPlayer";
import classes from "./Style-PlayTrailer";
import { options } from "@/lib/config";

const PlayTrailer = ({ image, id }) => {
  const dispatch = useDispatch();
  const loadingTrailer = useSelector((state) => state.TrailerMovie.loading);
  const trailer = useSelector((state) => state.TrailerMovie.trailer);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const originalId = id.slice(7, -1);

  const handleOpen = async () => {
    setOpen(true);
    if (
      trailer.length === 0 ||
      trailer === undefined ||
      router.query.length === undefined
    ) {
      dispatch(setLoading(true));
      await fetch(`/api/movie-trailer/${originalId}`, options)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setTrailer(data));
          dispatch(setLoading(false));
        })
        .catch(() => dispatch(setLoading(false)));
      dispatch(setLoading(false));
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        variant="text"
        color="inherit"
        onClick={handleOpen}
        sx={classes.buttonTrailer}
      >
        <BsPlayFill size={"1.8rem"} color="red" />
        Trailer
      </Button>
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={classes.boxMainParent}
        >
          <Box sx={classes.boxSubParent}>
            <Box sx={classes.boxHeaderTrailer}>
              <Typography id="modal-modal-title" variant="h5" component="h4">
                Trailer
              </Typography>
              <Button
                variant="text"
                color="inherit"
                sx={classes.buttonClose}
                onClick={handleClose}
              >
                <AiOutlineCloseCircle size={"1.5rem"} color="gray" />
              </Button>
            </Box>
            <Box sx={classes.boxTrailerMovie}>
              {loadingTrailer ? (
                <Loading shadow={true} />
              ) : (
                <>
                  {trailer.resource ? (
                    <>
                      {trailer.resource.encodings ? (
                        <VideoPlayer
                          url={
                            trailer.resource.encodings.find(
                              (tr) => tr.definition === "480p"
                            )
                              ? trailer.resource.encodings.find(
                                  (tr) => tr.definition === "480p"
                                ).playUrl
                              : trailer.resource.encodings.find(
                                  (tr) => tr.definition === "720p"
                                ).playUrl
                          }
                          poster={image}
                        />
                      ) : (
                        "sorry! we cant find any trailer for this movie"
                      )}
                    </>
                  ) : (
                    "sorry! we cant find any trailer for this movie"
                  )}
                </>
              )}
            </Box>
          </Box>
        </Modal>
      </>
    </Box>
  );
};

export default PlayTrailer;
