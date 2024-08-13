import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import {
  setDataSearch,
  setFocusInput,
  setLoadingSearch,
  setOpenInput,
  setStatusShowResult,
  setTextSearch,
} from "@/redux/reducers/search";
import { Box, Button } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

import { classesSearchInput } from "./Style-Search";
import SearchShowResult from "./SearchShowResult";
import SimpleLoading from "@/component/common/SimpleLoading";
import { ButtonIcon } from "../videoPlayer/Style-VideoPlayer";
import { getSearchResult } from "@/lib/getSearchResult";

const SearchInput = () => {
  const boxInputSearchRef = useRef();
  const inputSearchRef = useRef();

  const dispatch = useDispatch();
  const focusInput = useSelector((state) => state.SearchReducer.focusInput);
  const statusInput = useSelector((state) => state.SearchReducer.statusInput);
  const loadingSearch = useSelector(
    (state) => state.SearchReducer.loadingSearch
  );
  const textSearch = useSelector((state) => state.SearchReducer.textSearch);

  useEffect(() => {
    if (focusInput) inputSearchRef.current.focus();
  }, [focusInput]);

  useEffect(() => {
    dispatch(setStatusShowResult(0));
    const checkIfClickedOutside = (e) => {
      if (
        boxInputSearchRef.current &&
        !boxInputSearchRef.current.contains(e.target)
      ) {
        dispatch(setFocusInput(false));
        if (inputSearchRef.current.value.length === 0) {
          dispatch(setOpenInput(false));
        }
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [boxInputSearchRef, dispatch]);

  function handleFocusInput() {
    dispatch(setFocusInput(true));
  }

  function handleChangeStatusInput() {
    dispatch(setOpenInput(false));
    dispatch(setFocusInput(false));
    dispatch(setTextSearch(""));
    dispatch(setDataSearch([]));
  }

  function handleChangeTextInput(e) {
    dispatch(setTextSearch(e.target.value));
    dispatch(setDataSearch([]));
  }

  async function handleKeyPressInput(e) {
    if (e.key === "Enter") {
      if (inputSearchRef.current.value.length !== 0) {
        dispatch(setLoadingSearch(true));
        const res = await getSearchResult(inputSearchRef.current.value);
        if (res) dispatch(setDataSearch(res));
        else dispatch(setStatusShowResult(2));
        dispatch(setLoadingSearch(false));
      } else {
        dispatch(setStatusShowResult(1));
      }
    }
  }

  const router = useRouter();
  useEffect(() => {
    dispatch(setDataSearch([]));
    dispatch(setTextSearch(""));
    dispatch(setLoadingSearch(false));
    // todo: close search input when the page change
    // if (statusInput) {
    //   dispatch(setOpenInput(false));
    // }
    dispatch(setFocusInput(false));
    dispatch(setStatusShowResult(0));
  }, [router.asPath]);

  return (
    <Box
      sx={classesSearchInput.boxMainParentInputSearch}
      ref={boxInputSearchRef}
    >
      <Box sx={classesSearchInput.boxParentInputSearch}>
        <Box sx={classesSearchInput.boxParentInputSearch}>
          <Box
            component={"input"}
            type="text"
            sx={classesSearchInput.boxInputSearch}
            placeholder="Search In CityMovie"
            ref={inputSearchRef}
            onFocus={handleFocusInput}
            onChange={(e) => handleChangeTextInput(e)}
            onKeyPress={(event) => handleKeyPressInput(event)}
            value={textSearch}
          />
          {loadingSearch ? (
            <SimpleLoading width={30} height={30} />
          ) : (
            <Button
              variant="text"
              color="inherit"
              sx={ButtonIcon}
              onClick={handleChangeStatusInput}
            >
              <AiOutlineClose
                size="1.3rem"
                style={classesSearchInput.iconClose}
              />
            </Button>
          )}
        </Box>
      </Box>
      {focusInput === true && <SearchShowResult />}
    </Box>
  );
};
export default SearchInput;
