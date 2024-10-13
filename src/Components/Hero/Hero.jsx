import './Hero.css';
import { MdKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import iconFooterHero from './../../Assets/imgs/icon-footer-hero.jpg';
import IconUnderline from '../IconUderline/IconUnderline';

function Hero() {
  return (
    <>
      <div className='container-hero'>
        <div className='sec-r'>
          <div className='title-hero'>
            یک <span className='sec-1'>مشاوره خوب</span> <br /> <span className='sec-2'>ارزشمــند</span> است.
          </div>

          <div className='counseling'>
            مشاوره و ارزیابی
            <MdOutlineKeyboardDoubleArrowLeft className='icon' />
          </div>
        </div>

        <div className='footer-hero'>
          <div className='row-1'>
            <h3 className='title-about-us'>درباره ما:</h3>
            <IconUnderline />
          </div>

          <div className='row-2'>
            <p className='about-us'>
              یک مشاوره خوب ارزشمند است! <br />
              این جمله هدف و مقصد ایده مثد دوم فرتاک است.گاهی لازم است مشاوره بگیریم که به آنچه دوست داریم برسیم و گاهی <br />
              نیاز است مشاوره بگیرم که یک متخصص بگوید؛خواسته شما اشتباه است و از خسارتها و هزینه های زیاد جلوگیری کند. <br />
              ماموریت ما کمک و راهنمایی در خصوص انتخاب دانشگاه خوب و مورد تایید وزارت علوم ایران،رشته مناسب با سابقه تحصیلات متقاضی <br />
              و منطبق باالزامات سفارت کشور کانادا؛ایتالیا و امارات متحده عربی است. <br />
            </p>
            <a href='' className='more'>
              <MdKeyboardArrowLeft className='icon' /> بیشتر بخوانید
            </a>
          </div>

          <div className='row-3'>
            <img src={iconFooterHero} alt='icon footer hero' />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
