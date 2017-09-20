import React from 'react';
import Current from '../lib/Components/Current/Current.js';
import { shallow, mount } from 'enzyme';

let mockData = {
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
     let cityNode = wrapper.find('.city');
     console.log(cityNode.debug())
     expect(cityNode.text()).toEqual(mockData.location);
   });

   it('it should render the current component day', () => {
     let dayNode = wrapper.find('.currentTime');
     expect(dayNode.text()).toEqual(mockData.day);
   })

   it('it should render the current component daily description', () => {
     let timeNode = wrapper.find('.weatherSummary');
     expect(timeNode.text()).toEqual(mockData.dailyDescrip);
   })

  it('it should render the current component current temp', () => {
    let tempNode = wrapper.find('.currentTemp');
    expect(tempNode.text()).toEqual(mockData.currentTemp + '°');
  })

  // it('it should render the current component high temp', () => {
  //   let highNode = wrapper.find('.high-low');
  //   expect(highNode.text()).toEqual(mockData.dayHigh + '°')
  // })
  //
  // it('it should render the current component low temp', () => {
  //
  // })



   //
  //  it('it should render the current component current temp', () => {
  //    let dayNode = wrapper.find('.currentTemp');
  //    console.log(dayNode.debug())
  //    expect(dayNode.text()).toEqual(mockData.currentTemp);
  //  });
});
