import { createSlice } from '@reduxjs/toolkit';

const Search = createSlice({
    name: 'search',
    initialState: {
        textSearch: "",
        dataSearch: [],
        loadingSearch: false,
        statusInput: false,
        focusInput: false,
        /// if is 0 mean nothing . if 1 means user not enter any text . if 2 means we get error from api
        statusShowResult: 0,
    },
    reducers: {
        setTextSearch: (state, action) => {
            state.textSearch = action.payload
        },
        setDataSearch: (state, action) => {
            state.dataSearch = action.payload
        },
        setLoadingSearch: (state, action) => {
            state.loadingSearch = action.payload
        },
        setOpenInput: (state, action) => {
            if (action.payload === "" || action.payload === undefined)
                state.statusInput = !state.statusInput
            else
                state.statusInput = action.payload
        },
        setFocusInput: (state, action) => {
            state.focusInput = action.payload
        },
        setStatusShowResult: (state, action) => {
            state.statusShowResult = action.payload
        },
    }
})

export const { setOpenInput, setFocusInput, setTextSearch, setDataSearch, setLoadingSearch, setStatusShowResult } = Search.actions;
export default Search.reducer;