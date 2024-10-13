import './CardPicture.css';
import img from './../../Assets/imgs/img06.jpg';

function CardPicture() {
  return (
    <div className='card-picture'>
      <img src={img} alt='' />

      <div className='title-pic'>عنوان تصویر</div>
    </div>
  );
}
export default CardPicture;
