import React from 'react';
import renderer from 'react-test-renderer';

import { THEMES } from '../../../../themes';
import ButtonClose from '../component';

describe('ButtonClose component matches snapshot', () => {
  const defaultProps = {
    theme: {
      ButtonClose: {
        ...THEMES.light.ButtonClose,
      },
    },
    onPress: jest.fn(),
  };

  it('with default props', () => {
    const wrapper = renderer.create(<ButtonClose {...defaultProps} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('with dark theme', () => {
    const props = {
      ...defaultProps,
      theme: {
        ButtonClose: {
          ...THEMES.dark.ButtonClose,
        },
      },
    };
    const wrapper = renderer.create(<ButtonClose {...props} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
