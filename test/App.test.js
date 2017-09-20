import React from 'react';
import App from '../lib/Components/App/App.js';
import { shallow, mount } from 'enzyme';


describe('App functionality', () => {
  let wrapper;

  describe('localStorage doesnt return something for location', () => {

    global.localStorage = {
      getItem: () => false,
    };

    global.fetch = jest.fn(() => {
      return Promise.resolve({json: () => {Promise.resolve({})}})
    })


    beforeEach(() => {
      wrapper = mount(
        <App />
      );
    });

    it('it should render Search component', () => {


      expect(wrapper.find('Search').length).toEqual(1);
    });

  }),

  describe('localStorage returns something for location', () => {
    global.localStorage = {
      getItem: () => true,
    };

    beforeEach(() => {
      wrapper = shallow(
        <App />
      );
    });

    it('it should render Search component', () => {
      expect(wrapper.find('Search').length).toEqual(1);
    });

    it('it should render HourlyCardContainer component', () => {
      expect(wrapper.find('HourlyCardContainer').length).toEqual(1);
    });

    it('it should render DailyCardContainer component', () => {
      expect(wrapper.find('DailyCardContainer').length).toEqual(1);
    });

    it('it should render Current component', () => {
      expect(wrapper.find('Current').length).toEqual(1);
    });
  })
});
