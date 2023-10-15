import { configureStore } from '@reduxjs/toolkit';
import TrailerMovie from './reducers/trailerMovie.js';
import Video_Player from './reducers/video-player.js';
import Search from './reducers/search.js';
import Other from './reducers/other.js';

export default configureStore({
    reducer: {
        TrailerMovie: TrailerMovie,
        VideoPlayerReducer: Video_Player,
        SearchReducer: Search,
        Other: Other,
    },
    devTools: true
})