import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../../../redux/store';
import ProductSearch from './ProductSearch';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
