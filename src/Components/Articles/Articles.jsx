import './Articles.css';
import IconUnderline from '../IconUderline/IconUnderline';
import CardArticle from '../CardArticle/CardArticle';
import img02 from './../../Assets/imgs/img02.jpg';
import img03 from './../../Assets/imgs/img03.jpg';
import img04 from './../../Assets/imgs/img04.jpg';

function Articles() {
  return (
    <div className='container-articles'>
      <div className='title'>
        <h3>
          گزیده از مقالات
          <IconUnderline />
        </h3>
      </div>

      <div className='articles'>
        <CardArticle img={img02} title='دانشگاه ریوسن' />
        <CardArticle img={img03} title='دانشگاه آلبــرتا' />
        <CardArticle img={img04} title='دانشگاه کـــراندال' />
      </div>
    </div>
  );
}
export default Articles;
