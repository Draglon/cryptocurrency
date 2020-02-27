import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../component';

describe('Logo component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
