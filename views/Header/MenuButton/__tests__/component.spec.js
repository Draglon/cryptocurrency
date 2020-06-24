import React from 'react';
import renderer from 'react-test-renderer';

import { THEMES } from '../../../../themes';
import MenuButtonComponent from '../component';

describe('MenuButton component matches snapshot', () => {
  const defaultProps = {
    theme: {
      MenuButton: {
        ...THEMES.light.MenuButton,
      },
    },
    onSidebarOpen: jest.fn(),
  };

  it('with default props', () => {
    const wrapper = renderer.create(<MenuButtonComponent {...defaultProps} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('with dark theme', () => {
    const props = {
      ...defaultProps,
      theme: {
        MenuButton: {
          ...THEMES.dark.MenuButton,
        },
      },
    };
    const wrapper = renderer.create(<MenuButtonComponent {...props} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
