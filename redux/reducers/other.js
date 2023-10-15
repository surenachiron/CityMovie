import { createSlice } from '@reduxjs/toolkit';

const Other = createSlice({
    name: 'other',
    initialState: {
        browserWidth: 0,
    },
    reducers: {
        setBrowserWidth: (state, action) => {
            state.browserWidth = action.payload
        },
    }
})

export const { setBrowserWidth } = Other.actions;
export default Other.reducer;