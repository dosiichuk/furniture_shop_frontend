import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import QuickViewModal from './QuickViewModal';

describe('Component QuickViewModal', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <QuickViewModal />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
