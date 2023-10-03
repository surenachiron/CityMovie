import { ButtonIcon } from "@/utils/videoplayer/styled-videoplayer";
import { Box, Button } from "@mui/material";
import { FaSearch } from 'react-icons/fa'
import { setFocusInput, setOpenInput } from "@/redux/reducers/serach";
import { useDispatch } from "react-redux";

const SearchButton = () => {

    const dispatch = useDispatch()

    function ChangeStatusInput() {
        dispatch(setOpenInput(""))
        dispatch(setFocusInput(true))
    }

    return (
        <div>
            <Box sx={{ mr: { xs: "1rem", md: "1rem" } }}>
                <Button variant="text" color="inherit" sx={ButtonIcon} onClick={ChangeStatusInput}>
                    <FaSearch fontSize="1rem" />
                </Button>
            </Box>
        </div>
    );
}

export default SearchButton;