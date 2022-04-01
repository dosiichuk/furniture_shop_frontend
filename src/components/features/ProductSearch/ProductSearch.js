import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { getAll } from '../../../redux/categoriesRedux';
import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const categories = useSelector(getAll);

  const searchSubmitHandler = event => {
    event.preventDefault();
    history.push(`/search?search=${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <ul className={styles.dropdown}>
          <li>
            <FontAwesomeIcon className={styles.icon} icon={faListUl} />
            <a href='/'>Select a Category</a>
            <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
            <ul className={styles.options}>
              {categories.map(category => {
                return (
                  <li key={category.id}>
                    <Link to={`/shop/${category.name.toLowerCase()}`}>
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.searchField}>
        <form onSubmit={searchSubmitHandler}>
          <input
            placeholder='Search products...'
            type='text'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button>
            <a href={`${process.env.PUBLIC_URL}/search`}>
              <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            </a>
          </button>
        </form>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
