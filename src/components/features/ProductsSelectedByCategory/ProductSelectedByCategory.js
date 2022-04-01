import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';
import ProductListItem from '../../common/ProductListItem/ProductListItem';
import {
  getProductsByCategory,
  getProductsBySearchTerm,
} from '../../../redux/productsRedux';
import { getAll } from '../../../redux/categoriesRedux';
import styles from './ProductsSelectedByCategory.module.scss';

const ProductsSelectedByCategory = ({ searchTerm, layout }) => {
  const categories = useSelector(getAll);
  const searchCategory = categories.find(
    category => category.name.toLowerCase() === searchTerm
  ) || { name: '' };

  const productsByCategory = useSelector(state =>
    getProductsByCategory(state, searchCategory.name.toLowerCase())
  );
  const productsBySearchTerm = useSelector(state =>
    getProductsBySearchTerm(state, searchTerm)
  );
  let products;
  if (productsByCategory.length !== 0) {
    products = productsByCategory;
  } else {
    products = productsBySearchTerm;
  }
  if (products.length === 0 || !searchCategory) {
    return <div>No products found</div>;
  }
  return (
    <>
      {layout === 'grid' && (
        <div className={styles.productGrid}>
          {products.map(product => (
            <ProductBox key={product.id} {...product} product={product} />
          ))}
        </div>
      )}
      {layout === 'list' && (
        <div className={styles.productList}>
          {products.map(product => (
            <ProductListItem key={product.id} {...product} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

ProductsSelectedByCategory.propTypes = {
  searchTerm: PropTypes.string,
  layout: PropTypes.string,
};
export default ProductsSelectedByCategory;
