import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

import MainContent from './MainContent';
import classes from './Style-SliderComingSoon'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SliderComingSoon = ({ comingSoonMovie }) => {

    return (
        <>
            {comingSoonMovie.length > 1 && comingSoonMovie.message === undefined &&
                <Box sx={classes.boxMainParent}>
                    <Box sx={classes.boxSubParent}>
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
                            {comingSoonMovie.map(movie => (
                                <>
                                    {movie.title &&
                                        <SwiperSlide className='swiper-slide' key={movie.id}>
                                            <MainContent movie={movie} key={movie.id} />
                                        </SwiperSlide>
                                    }
                                </>
                            ))
                            }
                        </Swiper>
                    </Box>
                </Box >
            }
        </>
    );
}

export default SliderComingSoon;