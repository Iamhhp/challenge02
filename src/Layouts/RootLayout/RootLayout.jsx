import './RootLayout.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <div className='body'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default RootLayout;
