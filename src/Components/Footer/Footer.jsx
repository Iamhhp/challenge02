import './Footer.css';
import { LiaSearchSolid } from 'react-icons/lia';
import { BsInstagram } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io5';
import { MdSettingsInputSvideo, MdKeyboardArrowLeft } from 'react-icons/md';
import { FaFacebook, FaPhone } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import iconCompFooter from './../../Assets/imgs/icon-com-footer.jpg';
import iconEtemad from './../../Assets/imgs/icon-trust.jpg';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='row-1'>
          <img src={iconCompFooter} className='img-compony' alt='Icon Compony Footer' />
          <div className='address-comp'>
            مـشـهــد ، مــلک آبــاد ، خیـابـان <br /> بزرگـمـهــر چنــوبی ، حـدفـاصل <br /> بــزرگـمـهـر 9 و 11 پــلاک 175{' '}
          </div>
          <div className='icons-social'>
            <BsInstagram className='icon' />
            <IoLogoYoutube className='icon' />
            <MdSettingsInputSvideo className='icon' />
            <FaFacebook className='icon' />
          </div>
        </div>

        <div className='row-2'>
          <img src={iconEtemad} alt='icon etemad' />
          <div className='phone'>
            <FaPhone className='icon' /> <a href='tel:+985137600546'>تلفن : 7-37600546-051</a>
          </div>
          <div className='whatsapp'>
            <BsWhatsapp className='icon' />
            <div className='phone-whatsapp'>
              واتساپ : <a href='tel:+989103158201'>09103158201</a>
            </div>
          </div>
          <div className='email'>
            <a href='mailto:info@studyadvisor.ir'>info@studyadvisor.ir</a>
          </div>
        </div>

        <div className='row-3'>
          <div className='ser-1'>
            <a href=''>
              <MdKeyboardArrowLeft className='icon' /> مشاوره تحصلی
            </a>
          </div>
          <div className='ser-2'>
            <a href=''>
              <MdKeyboardArrowLeft className='icon' /> پذیرش تحصیلی کانادا
            </a>
          </div>
          <div className='ser-3'>
            <a href=''>
              <MdKeyboardArrowLeft className='icon' /> ویزای تحصیلی کانادا
            </a>
          </div>
          <div className='ser-4'>
            <a href=''>
              <MdKeyboardArrowLeft className='icon' /> ویزای تحصیلی ایتالیا
            </a>
          </div>
        </div>

        <div className='row-4'>
          <div className='box-search'>
            <LiaSearchSolid className='icon' />
            <input type='text' name='search' id='search' placeholder='جستجو' />
          </div>
          <a href=''>
            <MdKeyboardArrowLeft className='icon' /> وقت سفارت امریکا
          </a>
          <a href=''>
            <MdKeyboardArrowLeft className='icon' /> پیکاپ ویزا
          </a>
          <a href=''>
            <MdKeyboardArrowLeft className='icon' /> نوت آفیسر
          </a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
