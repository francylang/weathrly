import React from 'react';
import Welcome from '../lib/Components/Welcome/Welcome.js';
import { shallow, mount } from 'enzyme';


describe('welcome page', () => {

  it('it should render welcome', () => {
    const component = shallow(<Welcome />);
    const greeting = component.find('.welcomeContainer');
    expect(greeting.text()).toEqual('Weatherly');
  });

  it('it should render search bar', () => {
    const component = mount(<Welcome />);
    const current = component.find('.searchContainer');
    expect(current.nodes.length).toEqual(1);
  });

});
