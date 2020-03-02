import React from 'react';
import renderer from 'react-test-renderer';

import { THEMES } from '../../../../themes';
import BackLink from '../component';

describe('BackLink component matches snapshot', () => {
  const defaultProps = {
    theme: {
      BackLink: {
        ...THEMES.light.BackLink,
      },
    },
    onPress: jest.fn(),
  };

  it('with default props', () => {
    const wrapper = renderer.create(<BackLink {...defaultProps} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('with dark theme', () => {
    const props = {
      ...defaultProps,
      theme: {
        BackLink: {
          ...THEMES.dark.BackLink,
        },
      },
    };
    const wrapper = renderer.create(<BackLink {...props} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
