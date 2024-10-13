import './University.css';
import IconUnderline from '../IconUderline/IconUnderline';
import iconUni1 from './../../Assets/imgs/icon-uni01.jpg';
import iconUni2 from './../../Assets/imgs/icon-uni02.jpg';
import iconUni3 from './../../Assets/imgs/icon-uni03.jpg';
import iconUni4 from './../../Assets/imgs/icon-uni04.jpg';
import iconUni5 from './../../Assets/imgs/icon-uni05.jpg';
import iconUni6 from './../../Assets/imgs/icon-uni06.jpg';

function University() {
  return (
    <>
      <div className='container-uni'>
        <div className='title-uni'>
          <h3>دانشگاها:</h3>
          <IconUnderline />
        </div>

        <div className='imgs-uni'>
          <img src={iconUni1} alt='icon University' className='img-uni1' />
          <img src={iconUni2} alt='icon University' className='img-uni2' />
          <img src={iconUni6} alt='icon University' className='img-uni3' />
          <img src={iconUni3} alt='icon University' className='img-uni4' />
          <img src={iconUni4} alt='icon University' className='img-uni5' />
          <img src={iconUni5} alt='icon University' className='img-uni6' />
        </div>
      </div>
    </>
  );
}
export default University;
