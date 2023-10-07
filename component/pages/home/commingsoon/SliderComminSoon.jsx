import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MainContent from './MainContent';


const SliderComminSoon = ({ commingSoonMovie }) => {

    return (
        <>
            {commingSoonMovie.length > 1 && commingSoonMovie.message === undefined ?
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                    <Box sx={{ width: { md: "100%", xs: "100%" }, height: { md: "70vh", xs: "80vh" } }}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                                stopOnLastSlide: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop={true}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {commingSoonMovie.map(movie => (
                                <>
                                    {movie.title ?
                                        <SwiperSlide className='swiper-slide' key={movie.id}>
                                            <MainContent movie={movie} key={movie.id} />
                                        </SwiperSlide>
                                        : ""}
                                </>
                            ))
                            }
                        </Swiper>
                    </Box>
                </Box >
                : ""}
        </>
    );
}

export default SliderComminSoon;