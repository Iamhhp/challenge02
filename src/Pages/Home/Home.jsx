import './Home.css';
import CauseSuccess from '../../Components/CauseSuccess/CauseSuccess';
import Hero from '../../Components/Hero/Hero';
import ServiceUs from '../../Components/ServiveUs/ServiceUs';
import University from '../../Components/University/University';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function Home() {
  return (
    <>
      <Hero />
      <University />
      <ServiceUs />
      <Swiper pagination navigation modules={[Pagination, Navigation]} className='my-swiper'>
        <SwiperSlide>
          <CauseSuccess />
        </SwiperSlide>

        <SwiperSlide>
          <CauseSuccess />
        </SwiperSlide>

        <SwiperSlide>
          <CauseSuccess />
        </SwiperSlide>

        <SwiperSlide>
          <CauseSuccess />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Home;
