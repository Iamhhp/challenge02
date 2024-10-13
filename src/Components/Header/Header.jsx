import './Header.css';
import { NavLink } from 'react-router-dom';
import iconCompony from './../../Assets/imgs/icon-comp-header.jpg';
import iconWhatsApp from './../../Assets/imgs/icon-whatsapp.jpg';
import { LiaSearchSolid } from 'react-icons/lia';

function Header() {
  return (
    <header className='header'>
      <div className='section-right'>
        <div className='sec-up'>
          <h6 className='title-sec1'>ایــــده مقـصد دوم</h6>
        </div>

        <div className='sec-down'>
          <div className='sec-r'>
            <h3 className='title-sec2'>فرتاک</h3>

            <nav>
              <ul className='nav-menu'>
                <li>
                  <NavLink to={'/Home'}>خانه</NavLink>
                </li>
                <li>
                  <NavLink to={'Service'}>خدمات ما</NavLink>
                </li>
                <li>
                  <NavLink to={'Articles'}>مقالات</NavLink>
                </li>
                <li>
                  <NavLink to={'Contact-us'}>تماس با ما</NavLink>
                </li>
              </ul>
            </nav>

            <img src={iconWhatsApp} className='icon-whatsapp' alt='icon-whatsapp' />
          </div>

          <div className='sec-l'>
            <div className='box-search'>
              <LiaSearchSolid style={{ fontSize: '3.5rem', color: 'white' }} />
              <input type='text' name='search' id='search' placeholder='جستجو' />
            </div>
          </div>
        </div>
      </div>

      <img src={iconCompony} alt='icon-compony' />
    </header>
  );
}
export default Header;
