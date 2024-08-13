import { useDispatch } from "react-redux";
import { setFocusInput, setOpenInput } from "@/redux/reducers/search";
import { Box, Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";

import { classesSearchButton } from "./Style-Search";
import { ButtonIcon } from "../videoPlayer/Style-VideoPlayer";

const SearchButton = () => {
  const dispatch = useDispatch();

  function ChangeStatusInput() {
    dispatch(setOpenInput(""));
    dispatch(setFocusInput(true));
  }

  return (
    <div>
      <Box sx={classesSearchButton.boxButtonSearch}>
        <Button
          variant="text"
          color="inherit"
          sx={ButtonIcon}
          onClick={ChangeStatusInput}
        >
          <FaSearch fontSize="1rem" />
        </Button>
      </Box>
    </div>
  );
};

export default SearchButton;
