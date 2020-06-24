import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import MenuButtonContainer from '../container';

describe('MenuButton container', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();

  const defaultProps = {
    store,
    navigation: {
      openDrawer: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const container = shallow(<MenuButtonContainer {...defaultProps} />);
  const instance = container.instance();

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('handleSidebarOpen()', () => {
    instance.handleSidebarOpen();

    expect(defaultProps.navigation.openDrawer).toHaveBeenCalled();
  });
});
