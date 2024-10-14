import './VideosPictures.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardVideo from '../CardVideo/CardVideo';
import CardPicture from '../CardPicture/CardPicture';
import IconUnderline from '../IconUderline/IconUnderline';

function VideosPictures() {
  return (
    <div className='videos-pictures'>
      <div className='sec-video'>
        {' '}
        <div className='title-videos'>
          <h3>ویدئوها:</h3>
          <IconUnderline />
        </div>
        <Swiper
          spaceBetween={20}
          pagination
          navigation
          autoplay={{ delay: 1000, pauseOnMouseEnter: true }}
          modules={[Pagination, Navigation, Autoplay]}
          className='my-swiper'
        >
          <SwiperSlide>
            <CardVideo />
          </SwiperSlide>

          <SwiperSlide>
            <CardVideo />
          </SwiperSlide>

          <SwiperSlide>
            <CardVideo />
          </SwiperSlide>

          <SwiperSlide>
            <CardVideo />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='ser-pic'>
        <div className='title-pictures'>
          <h3>تصاویر:</h3>
          <IconUnderline />
        </div>

        <Swiper
          spaceBetween={20}
          pagination
          navigation
          autoplay={{ delay: 1100, pauseOnMouseEnter: true }}
          modules={[Pagination, Navigation, Autoplay]}
          className='my-swiper'
        >
          <SwiperSlide>
            <CardPicture />
          </SwiperSlide>

          <SwiperSlide>
            <CardPicture />
          </SwiperSlide>

          <SwiperSlide>
            <CardPicture />
          </SwiperSlide>

          <SwiperSlide>
            <CardPicture />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default VideosPictures;
