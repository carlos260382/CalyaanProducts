import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import styles from '../style/SearchScreen.module.css';

export default function Product(props) {
    const { product } = props;
  console.log('estos son los productos', product)
    return (
    <div key={product._id} className= {styles.card}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div>
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div>
          <div className={styles.price} >${product.price}</div>
          <div>
            {/* <Link to={`/seller/${product.seller._id}`}>
              {product.seller.name}
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
