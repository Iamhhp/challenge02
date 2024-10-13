import './CardVideo.css';
import img from './../../Assets/imgs/img05.jpg';

function CardVideo() {
  return (
    <div className='card-video'>
      <img src={img} alt='' />
      <div className='title'>عنوان ویدئو</div>
    </div>
  );
}
export default CardVideo;
