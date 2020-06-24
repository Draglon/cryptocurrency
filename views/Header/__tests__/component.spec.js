import React from 'react';
import { shallow } from 'enzyme';

import { THEMES } from '../../../themes';
import HeaderComponent from '../component';

describe('Header component matches snapshot', () => {
  const defaultProps = {
    navigation: {
      navigate: jest.fn(),
    },
    theme: {
      Header: {
        ...THEMES.light.Header,
      },
    },
  };

  it('with default props', () => {
    const wrapper = shallow(<HeaderComponent {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('with dark theme', () => {
    const props = {
      ...defaultProps,
      theme: {
        Header: {
          ...THEMES.dark.Header,
        },
      },
    };
    const wrapper = shallow(<HeaderComponent {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
