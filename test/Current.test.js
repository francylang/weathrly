import React from 'react';
import Current from '../lib/Components/Current/Current.js';
import { shallow, mount } from 'enzyme';

const mockData = {
  location: 'Denver, CO',
  day: 'Monday',
  currentTemp: 88,
  currentIcon: 'weather.current_observation.icon',
  dayHigh: 88,
  dayLow: 66,
  dailyDescrip: 'Sunny with a chance of hail',
};

describe('Card Functionality', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
       <Current
         weather={mockData}
         colors={'blue'}
       />
     );
  });


  it('it should render the current component city', () => {
    const cityNode = wrapper.find('.city');

    expect(cityNode.text()).toEqual(mockData.location);
  });

  it('it should render the current component day', () => {
    const dayNode = wrapper.find('.currentTime');
    expect(dayNode.text()).toEqual(mockData.day);
  });

  it('it should render the current component daily description', () => {
    const timeNode = wrapper.find('.weatherSummary');
    expect(timeNode.text()).toEqual(mockData.dailyDescrip);
  });

  it('it should render the current component current temp', () => {
    const tempNode = wrapper.find('.currentTemp');
    expect(tempNode.text()).toEqual(mockData.currentTemp + '°');
  });
});
