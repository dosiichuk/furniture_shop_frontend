import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Search.module.scss';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ProductList from '../ProductList/ProductList';

const Search = () => (
  <div className={styles.root}>
    <ProductList />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Search;
