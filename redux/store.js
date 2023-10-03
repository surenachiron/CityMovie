import { configureStore } from '@reduxjs/toolkit';
import TrailerMovie from './reducers/trailermovie.js';
import Video_Player from './reducers/video-player.js';
import Search from './reducers/serach.js';
import Other from './reducers/other.js';

export default configureStore({
    reducer: {
        TrailerMovie: TrailerMovie,
        VideoPlayerReduser: Video_Player,
        SearchReduser: Search,
        Other: Other,
    },
    devTools: true
})