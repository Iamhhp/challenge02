import './ServiceUs.css';
import IconUnderline from '../IconUderline/IconUnderline';
import Service from '../Service/Service';
import iconSer1 from './../../Assets/imgs/icon-serv01.jpg';
import iconSer2 from './../../Assets/imgs/icon-serv02.jpg';
import iconSer3 from './../../Assets/imgs/icon-serv03.jpg';

function ServiceUs() {
  const dataService = [
    {
      id: 1,
      icon: iconSer1,
      title: 'بورس تحصیلی',
      desc: 'ثبت درخواست و پیگیری مراحل بورسیه',
    },
    {
      id: 2,
      icon: iconSer2,
      title: 'مشاوره تحصیلی',
      desc: 'ویزای تحصیلی انواع رشته و مقاطع بالاتر',
    },
    {
      id: 3,
      icon: iconSer3,
      title: 'پشتیبانی',
      desc: 'انجام تمامی مراحل پروسه اپلای',
    },
  ];

  return (
    <div className='container-service'>
      <div className='title-service'>
        <h3>خدمات ما:</h3>
        <IconUnderline />
      </div>

      <div className='services'>
        {dataService.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
export default ServiceUs;
