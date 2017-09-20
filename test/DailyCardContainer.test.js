import React from 'react';
import DailyCardContainer from '../lib/Components/DailyCardContainer/DailyCardContainer.js';
import { shallow, mount } from 'enzyme';


const mockData = {
  day: {
    tenDayCondition: ['Thunderstorm', 'Rain'],
    tenDayDay: ['Tue', 'Wed'],
    tenDayHigh: ['86', '82'],
    tenDayIcon: ['tstorms', 'rain'],
    tenDayLow: ['79', '79'],
  },

};


describe('Card Functionality', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
       <DailyCardContainer
         {...mockData}
       />
     );
  });


  it('it should render multiple DailyCards', () => {
    const dailyCards = wrapper.find('DailyCard');
    expect(dailyCards.length).toEqual(2);
  });
});
