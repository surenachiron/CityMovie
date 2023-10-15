import { createSlice } from '@reduxjs/toolkit';

const Video_Player = createSlice({
    name: 'video-player',
    initialState: {
        rate: 1,
        openOptionsLists: false,
        isFullScreen: false
    },
    reducers: {
        setRate: (state, action) => {
            state.rate = action.payload
        },
        setOpenOptionsLists: (state, action) => {
            state.openOptionsLists = action.payload
        },
        setFullScreen: (state, action) => {
            state.isFullScreen = action.payload
        },
    }
})

export const { setRate, setOpenOptionsLists, setFullScreen } = Video_Player.actions;
export default Video_Player.reducer;