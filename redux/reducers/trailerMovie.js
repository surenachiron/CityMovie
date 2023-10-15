import { createSlice } from '@reduxjs/toolkit';

const TrailerMovie = createSlice({
    name: 'trailerMovie',
    initialState: {
        trailer: [],
        loading: false
    },
    reducers: {
        setTrailer: (state, action) => {
            state.trailer = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})

export const { setTrailer, setLoading } = TrailerMovie.actions;
export default TrailerMovie.reducer;