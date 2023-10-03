import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperSliderTranding from './SwiperSliderTranding';


const SliderTranding = ({ commingSoonMovie }) => {

    return (
        <>
            {commingSoonMovie.length > 1 ?
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: { md: "65%", xs: "100%" }, height: { md: "70vh", xs: "80vh" } }}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {commingSoonMovie.map(movie => (
                                <SwiperSlide className='swiper-slide' key={movie.id}>
                                    <SwiperSliderTranding image={movie.title.image.url} title={movie.title.title} relaseData={movie.releaseDate} ratings={movie.ratings} genres={movie.genres} id={movie.id} />
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                    </Box>
                </Box >
                : ""}
        </>
    );
}

export default SliderTranding;