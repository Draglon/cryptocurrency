import React from 'react';
import renderer from 'react-test-renderer';

import IconPrimary from '../component';

describe('IconPrimary component matches snapshot', () => {
  const defaultProps = {
    iconType: 'mock  font icon',
    iconName: 'email',
    iconSize: 18,
    iconColor: 'white',
    iconStyle: {},
  };

  it('with default props', () => {
    const wrapper = renderer.create(<IconPrimary {...defaultProps} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
