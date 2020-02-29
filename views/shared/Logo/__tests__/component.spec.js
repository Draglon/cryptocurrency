import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../component';

describe('Logo component matches snapshot', () => {
  const defaultProps = {
    theme: {
      Logo: {
        style: {
          width: 100,
          height: 50,
        },
        source: 1,
      },
    },
  };

  it('with default props', () => {
    const wrapper = renderer.create(<Logo {...defaultProps} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
