import { useEffect, useRef } from "react";
import { ParentInputSearchStyle, inputsearchstyle, BoxInputSearchStyle, sxBoxInputSearchStyle, sxParentInputSearchStyle } from "./styled-search";
import { ButtonIcon } from "@/utils/videoplayer/styled-videoplayer";
import SearchShowResult from "./SearchShowResult";
import SimpleLoading from "@/component/common/SimpleLoading";
import { AiOutlineClose } from 'react-icons/ai';
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDataSearch, setFocusInput, setLoadingSearch, setOpenInput, setStatusShowResult, setTextSearch } from "@/redux/reducers/serach";

const SearchIniput = () => {

    const boxinputsearchref = useRef()
    const inputsearchref = useRef()

    const dispatch = useDispatch()
    const focusInput = useSelector(state => state.SearchReduser.focusInput)
    const loadingSearch = useSelector(state => state.SearchReduser.loadingSearch)
    const textSearch = useSelector(state => state.SearchReduser.textSearch)
    const dataSearch = useSelector(state => state.SearchReduser.dataSearch)

    useEffect(() => {
        dispatch(setStatusShowResult(0))
        const checkIfClickedOutside = e => {
            if (boxinputsearchref.current && !boxinputsearchref.current.contains(e.target)) {
                if (inputsearchref.current.value.length === 0) {
                    dispatch(setFocusInput(false))
                    dispatch(setOpenInput(false))
                } else dispatch(setFocusInput(false))
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [boxinputsearchref, dispatch])

    function handleFocusInput() {
        dispatch(setFocusInput(true))
    }

    function handleChangeStatusInput() {
        dispatch(setOpenInput(false))
        dispatch(setFocusInput(false))
        dispatch(setTextSearch(""))
        dispatch(setDataSearch([]))
    }

    function handleChangeTextInput(e) {
        dispatch(setTextSearch(e.target.value))
        dispatch(setDataSearch([]))
    }

    async function handleKeyDownInput(e) {
        if (e.code === "Enter") {
            const configuration = {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }
            if (inputsearchref.current.value.length !== 0) {
                dispatch(setLoadingSearch(true))
                await fetch(`/api/search/${inputsearchref.current.value}`, configuration)
                    .then((response) => response.json())
                    .then((data) => {
                        dispatch(setDataSearch(data))
                    })
                    .catch(error => dispatch(setStatusShowResult(2)))
                dispatch(setLoadingSearch(false))
            } else {
                dispatch(setStatusShowResult(1))
            }
        }
    }

    return (
        <Box sx={{ width: { md: "300px", xs: "100%" }, position: "relative" }} ref={boxinputsearchref}>
            <ParentInputSearchStyle sx={sxParentInputSearchStyle}>
                <BoxInputSearchStyle sx={sxBoxInputSearchStyle}>
                    <Box component={"input"} type="text" sx={inputsearchstyle} placeholder="Search In CityMovie" ref={inputsearchref} onFocus={handleFocusInput} onChange={e => handleChangeTextInput(e)} onKeyDown={(event) => handleKeyDownInput(event)} value={textSearch} />
                    {loadingSearch ? <SimpleLoading width={30} height={30} /> :
                        <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleChangeStatusInput}>
                            <AiOutlineClose size="1.3rem" style={{ cursor: "pointer", margin: "0 5px" }} />
                        </Button>
                    }
                </BoxInputSearchStyle>
            </ParentInputSearchStyle>
            {focusInput === true ? <SearchShowResult></SearchShowResult> : ""}
        </Box>
    );
}
export default SearchIniput;