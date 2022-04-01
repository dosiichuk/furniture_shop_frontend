import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProductsInCart } from '../../../redux/cartRedux';

import styles from './CartCounter.module.scss';

const CartCounter = () => {
  const productNumber = useSelector(getAllProductsInCart).length;
  return <div className={styles.cartCounter}>{productNumber}</div>;
};

export default CartCounter;
