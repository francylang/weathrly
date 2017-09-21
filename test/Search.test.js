
import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/Components/Current/Current.js';
import Welcome from '../lib/Components/Welcome/Welcome.js';
import App from '../lib/Components/App/App.js';
import Search from '../lib/Components/Search/Search.js';
let wrapper;

describe('SEARCH', () => {
  wrapper;
  let mkFun;
  global.localStorage = {
    getItem: () => false,
  };

  global.fetch = jest.fn(() => {
    return Promise.resolve({ json: () => { Promise.resolve({});
    },
      });
  });

  it('should render an input field', () => {
    wrapper = shallow(<Search />);
    expect(wrapper.find('.search')).toBeDefined();
  });

  it('should render the search bar when displaying weather report', () => {
    const component = mount(<App />);
    const current = component.find('Search');
    expect(current.nodes.length).toEqual(1);
  });

  it('should render a button field', () => {
    const search = shallow(<Search />);
    expect(search.find('button')).toBeDefined();
  });

  it('should change state based on input', () => {
    wrapper = mount(
      <Search />
    );
    const input = wrapper.find('input');

    expect(wrapper.state('locInput')).toEqual('');
    const newInput = { target: { value: 'louisville' } };

    input.simulate('keyUp', newInput);
    expect(wrapper.state('locInput')).toEqual('louisville');
  });

  it('fire a function on click', () => {
    mkFun = jest.fn();
    const search = mount(<Search handleSearch={mkFun}/>);
    const btn = search.find('button');

    btn.simulate('click');
    expect(mkFun).toHaveBeenCalledTimes(1);
  });
});
