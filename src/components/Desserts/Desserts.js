import './Desserts.scss';
import baklava from '../../assets/images/image-baklava-thumbnail.jpg';


function Desserts({ data }) {
  return (
    <>
      <header>
        <h1>Desserts</h1>
        <img src={baklava} alt="baklava"/>
      </header>
      
      {data.map((dessert, index) => (
        <div key={index}>
          <img src={dessert.image.thumbnail} alt={dessert.name}/>
          <button>Add to Cart</button>
          <span>{dessert.category}</span>
          <p>{dessert.name}</p>
          <p>{dessert.price}</p>
        </div>
      ))}
    </>
  );
}

export default Desserts;
