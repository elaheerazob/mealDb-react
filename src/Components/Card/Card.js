import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css'

const Card = ({fish,addtoCard}) => {
  // console.log(props);
  const {strMealThumb,strArea,strTags,strCategory} =fish
  return (
    <div className='card'>
      <div className='image-container'>
      <img src={strMealThumb} alt="" />
      </div>
      <div >
        <h3>{strCategory}</h3>
        <p>{strTags}</p>
        <p>{strArea}</p>
      </div>
      <div>
        <button className='icone' onClick={() => addtoCard(fish)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
      </div>
    </div>
  );
};

export default Card;
