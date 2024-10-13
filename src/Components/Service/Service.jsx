import './Service.css';

function Service({ icon, title, desc }) {
  return (
    <div className='container-ser'>
      <img src={icon} className='icon' alt='icon service' />
      <div className='title-ser'>{title}</div>
      <div className='desc'>{desc}</div>
    </div>
  );
}
export default Service;
