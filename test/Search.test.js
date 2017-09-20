
import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/Components/Current/Current.js';
import Welcome from '../lib/Components/Welcome/Welcome.js';
import App from '../lib/Components/App/App.js';

describe('SEARCH', () => {
  global.localStorage = {
    getItem: () => false,
  };

  global.fetch = jest.fn(() => {
    return Promise.resolve({ json: () => { Promise.resolve({});
    },
});
  });


  it('should render the search bar when displaying weather report', () => {
    const component = mount(<App />);
    const current = component.find('Search');
    expect(current.nodes.length).toEqual(1);
  });
});
