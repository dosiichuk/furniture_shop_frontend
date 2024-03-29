import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';
import Brands from '../../features/Brands/BrandsContainer';

// import PropTypes from 'prop-types';

import ProductsSelectedByCategory from '../../features/ProductsSelectedByCategory/ProductSelectedByCategory';
import styles from './ProductList.module.scss';

const ProductList = props => {
  const [layout, setLayout] = useState('grid');

  const { categoryId } = useParams();
  const search = useLocation().search;
  let searchTerm = categoryId;
  if (!categoryId) {
    searchTerm = new URLSearchParams(search).get('search');
  }
  if (!searchTerm) {
    return <div>Category not found</div>;
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.banner}>
          <p>
            Bedroom <span>furniture</span>
          </p>
          <p>
            Always <span>25%</span> off or more
          </p>
        </div>
        <div className={styles.navBar}>
          <Link to='/'>Home</Link>
          <p>
            &gt;<span>Furniture</span>
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row d-flex flex-row justify-content-between align-items-center py-3'>
              <div className='col-4'>
                <h3 className='m-0'>{searchTerm.toUpperCase()}</h3>
              </div>
              <div className={styles.switch}>
                <button
                  onClick={() => {
                    if (layout !== 'grid') {
                      setLayout('grid');
                    }
                  }}
                  className={`${styles.switchButton} ${
                    layout === 'grid' ? styles.active : ''
                  }`}
                >
                  <FontAwesomeIcon icon={faTable}>Grid</FontAwesomeIcon>
                </button>

                <button
                  onClick={() => {
                    if (layout !== 'list') setLayout('list');
                  }}
                  className={`${styles.switchButton} ${
                    layout === 'list' ? styles.active : ''
                  }`}
                >
                  <FontAwesomeIcon icon={faList}>List</FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className={styles.productsContainer}>
              <ProductsSelectedByCategory searchTerm={searchTerm} layout={layout} />
            </div>
          </div>
          <div className='col-lg-3'>
            <h3>Filters</h3>
          </div>
        </div>
      </div>
      <div className='container'>
        <Brands />
      </div>
    </div>
  );
};
ProductList.propTypes = {
  listByCategory: PropTypes.bool,
};

export default ProductList;
