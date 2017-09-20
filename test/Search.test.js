
import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/Components/Current/Current.js';
import Welcome from '../lib/Components/Welcome/Welcome.js';
import App from '../lib/Components/App/App.js';
import Search from '../lib/Components/Search/Search.js'

describe('SEARCH', () => {
  let wrapper;
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
    const search = shallow(<Search />);
    expect(search.find('.search')).toBeDefined();
  });









//   it('should change state based on the input', () => {
//      const search = mount(<Search />);
//      const input = search.find('input');
//      expect(search.state('location')).toEqual('');
//      const inputValue = { target: { value: 'Baton Rouge' } };
// })


  // it('should change state based on the input', () => {
  //   const search = mount(<Search />);
  //   const input = search.find('input');
  //
  //
  //   expect(search.state('input')).toEqual('');
  //   const inputValue = { target: { value: 'louisville, ky' } };
  //   input.simulate('change', inputValue);
  //   expect(search.state('location')).toEqual('louisville, ky');
  // });






  it('should render the search bar when displaying weather report', () => {
    const component = mount(<App />);
    const current = component.find('Search');
    expect(current.nodes.length).toEqual(1);
  });

  it('should render a button field', () => {
    const search = shallow(<Search />);
    expect(search.find('button')).toBeDefined();
  });

  it('fire a function on click', () => {
    const mkFun = jest.fn()
    const search = mount(<Search handleSearch={mkFun}/>);
    const btn = search.find('button');
    btn.simulate('click')
    expect(mkFun).toHaveBeenCalledTimes(1)
  });

  it('state should change after click', () => {
    const mkFun = jest.fn()
    wrapper = mount(<Search handleSearch={mkFun} />);

    const inputBox = wrapper.find('.search')
    const button = wrapper.find('button')

    inputBox.simulate('change', {which: 'a'});
    button.simulate('click');

    expect(wrapper.find('.search')).toBeDefined();
    expect(wrapper.instance().state.location).toEqual('a')
  })





});
