import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setDataSearch, setFocusInput, setLoadingSearch, setOpenInput, setStatusShowResult, setTextSearch } from "@/redux/reducers/search";

import { classesSearchInput } from "./Style-Search";
import SearchShowResult from "./SearchShowResult";
import SimpleLoading from "@/component/common/SimpleLoading";
import { Box, Button } from "@mui/material";
import { ButtonIcon } from "../videoPlayer/Style-VideoPlayer";

import { AiOutlineClose } from 'react-icons/ai';

const SearchInput = () => {

    const boxInputSearchRef = useRef()
    const inputSearchRef = useRef()

    const dispatch = useDispatch()
    const focusInput = useSelector(state => state.SearchReducer.focusInput)
    const loadingSearch = useSelector(state => state.SearchReducer.loadingSearch)
    const textSearch = useSelector(state => state.SearchReducer.textSearch)

    useEffect(() => {
        dispatch(setStatusShowResult(0))
        const checkIfClickedOutside = e => {
            if (boxInputSearchRef.current && !boxInputSearchRef.current.contains(e.target)) {
                if (inputSearchRef.current.value.length === 0) {
                    dispatch(setFocusInput(false))
                    dispatch(setOpenInput(false))
                } else dispatch(setFocusInput(false))
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [boxInputSearchRef, dispatch])

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

    async function handleKeyPressInput(e) {
        if (e.key === 'Enter') {
            const configuration = {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }
            if (inputSearchRef.current.value.length !== 0) {
                dispatch(setLoadingSearch(true))
                await fetch(`/api/search/${inputSearchRef.current.value}`, configuration)
                    .then((response) => response.json())
                    .then((data) => {
                        dispatch(setDataSearch(data))
                    })
                    .catch(() => dispatch(setStatusShowResult(2)))
                dispatch(setLoadingSearch(false))
            } else {
                dispatch(setStatusShowResult(1))
            }
        }
    }

    const router = useRouter()
    useEffect(() => {
        dispatch(setDataSearch([]))
        dispatch(setTextSearch(''))
        dispatch(setLoadingSearch(false))
        dispatch(setOpenInput(""))
        dispatch(setFocusInput(true))
        dispatch(setStatusShowResult(0))
    }, [router.pathname])

    return (
        <Box sx={classesSearchInput.boxMainParentInputSearch} ref={boxInputSearchRef}>
            <Box sx={classesSearchInput.boxParentInputSearch}>
                <Box sx={classesSearchInput.boxParentInputSearch}>
                    <Box component={"input"} type="text" sx={classesSearchInput.boxInputSearch} placeholder="Search In CityMovie" ref={inputSearchRef} onFocus={handleFocusInput} onChange={e => handleChangeTextInput(e)} onKeyPress={(event) => handleKeyPressInput(event)} value={textSearch} />
                    {loadingSearch ? <SimpleLoading width={30} height={30} /> :
                        <Button variant="text" color="inherit" sx={ButtonIcon} onClick={handleChangeStatusInput}>
                            <AiOutlineClose size="1.3rem" style={classesSearchInput.iconClose} />
                        </Button>
                    }
                </Box>
            </Box>
            {focusInput === true && <SearchShowResult></SearchShowResult>}
        </Box>
    );
}
export default SearchInput;