import './Home.css';
import Hero from '../../Components/Hero/Hero';
import ServiceUs from '../../Components/ServiveUs/ServiceUs';
import University from '../../Components/University/University';
import GalleryCauses from '../../Components/GallaryCauses/GalleryCauses';

function Home() {
  return (
    <>
      <Hero />
      <University />
      <ServiceUs />
      <GalleryCauses />
    </>
  );
}
export default Home;
