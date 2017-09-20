
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


  it('should change state based on the input', () => {
    const search = shallow(<Search />);
    // search.setState({ suggestions:  })
    const input = search.find('input');
    expect(input.text()).toEqual('');
    expect(search.state('locInput')).toEqual('');
    search.setState({locInput: 'louisville, ky'})
    input.simulate('change');
    expect(search.state('locInput')).toEqual('louisville, ky');
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

  it('fire a function on click', () => {
    const mkFun = jest.fn()
    const search = mount(<Search handleSearch={mkFun}/>);
    const btn = search.find('button');
    btn.simulate('click')
    expect(mkFun).toHaveBeenCalledTimes(1)
  });
});
