
import { useEffect, useState, useRef } from 'react';
import './App.css';
import Logo from './assets/images/super-shoes.png';
import Arrow from './assets/images/arrow.png';

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() =>{
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData)
  }, [])

  function handleLeftClick (e){
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
    
  

  function handleRightClick (e){
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if(!data || !data.length) return null;

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt='Super-shoes Logo'/>
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) =>{
          const {id, name, price, oldPrice, image} = item;
          return(       
            <div className='item' key={id}>
              <div className='image'>
                <img src={image} alt={name} />
              </div>
              <div className='info'>
                <span className='name'>{name}1</span>
                <span className='oldPrice'>{oldPrice}</span>
                <span className='price'>{price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className='buttons'>
        <button onClick={handleLeftClick}>
          <img src={Arrow} alt='Scroll Left'></img>
        </button>
        <button onClick={handleRightClick}>
          <img src={Arrow} alt='Scroll Right'></img>
        </button>
      </div>
    </div>
  );
}

export default App;
