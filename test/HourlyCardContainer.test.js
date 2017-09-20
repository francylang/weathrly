import React from 'react';
import HourlyCardContainer from '../lib/Components/HourlyCardContainer/HourlyCardContainer.js';
import { shallow, mount } from 'enzyme';



let mockData = {
  day: {
      sevenHourTime: ['1pm', '2pm'],
      sevenHourTemp: ['90', '80'],
      tenDayIcon: ['tstorms', 'rain'],
      sevenDayCondition: ['sunny', 'cloudy'],
  }

};


describe('Card Functionality', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = mount(
       <HourlyCardContainer
         {...mockData}
       />
     );
   });


   it('it should render multiple Hourly Cards', () => {
     const hourlyCards = wrapper.find('HourlyCard');
     expect(hourlyCards.length).toEqual(2);
   });



});
