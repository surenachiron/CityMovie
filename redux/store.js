import { configureStore } from '@reduxjs/toolkit';
import TrailerMovie from './reducers/trailermovie.js';
import Video_Player from './reducers/video-player.js';

export default configureStore({
    reducer: {
        TrailerMovie: TrailerMovie,
        VideoPlayerReduser: Video_Player
    },
    devTools: true
})