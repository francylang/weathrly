import React from 'react';
import Welcome from '../lib/Components/Welcome/Welcome.js';
import { shallow, mount } from 'enzyme';
import App from '../lib/Components/App/App.js';

describe('welcome page', () => {
  global.localStorage = {
    getItem: () => false,
  };

  global.fetch = jest.fn(() => {
    return Promise.resolve({ json: () => { Promise.resolve({});
    },
});
  });

  it('it should render welcome', () => {
    const component = shallow(<Welcome />);
    const greeting = component.find('.welcomeContainer');
    expect(greeting.text()).toEqual('Welcome to Weatherly');
  });

  it('it should render search bar', () => {
    const component = mount(<App />);
    const current = component.find('Search');
    expect(current.nodes.length).toEqual(1);
  });
});
