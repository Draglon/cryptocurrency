import React from 'react';
import renderer from 'react-test-renderer';

import { THEMES } from '../../../../themes';
import ButtonPrimary from '../component';

describe('ButtonPrimary component matches snapshot', () => {
  const defaultProps = {
    theme: {
      ButtonPrimary: {
        ...THEMES.light.ButtonPrimary,
      },
    },
    onPress: jest.fn(),
  };

  it('with default props', () => {
    const wrapper = renderer.create(<ButtonPrimary {...defaultProps} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('with dark theme', () => {
    const props = {
      ...defaultProps,
      theme: {
        ButtonPrimary: {
          ...THEMES.dark.ButtonPrimary,
        },
      },
    };
    const wrapper = renderer.create(<ButtonPrimary {...props} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
