import './Offer.css';

function Offer({ img, title }) {
  return (
    <div className='container-offer'>
      <img src={img} alt='' />
      <div className='title-offer'>{title}</div>
    </div>
  );
}
export default Offer;
