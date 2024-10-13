import './CardArticle.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function CardArticle({ img, title }) {
  return (
    <div className='card'>
      <img src={img} alt='' />

      <div className='title-card'>
        <MdKeyboardArrowLeft className='icon' />
        <h3>{title}</h3>
      </div>

      <p className='desc'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است.
      </p>
    </div>
  );
}
export default CardArticle;
