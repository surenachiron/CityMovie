import { createSlice } from '@reduxjs/toolkit';

const Video_Player = createSlice({
    name: 'video-player',
    initialState: {
        rate: 1,
        openOprionsLists: false,
        isFullScreen: false
    },
    reducers: {
        setRate: (state, action) => {
            state.rate = action.payload
        },
        setopenOprionsLists: (state, action) => {
            state.openOprionsLists = action.payload
        },
        setFullScreen: (state, action) => {
            state.isFullScreen = action.payload
        },
    }
})

export const { setRate, setopenOprionsLists, setFullScreen } = Video_Player.actions;
export default Video_Player.reducer;