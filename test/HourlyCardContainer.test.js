import React from 'react';
import HourlyCardContainer from '../lib/Components/HourlyCardContainer/HourlyCardContainer.js';
import { shallow, mount } from 'enzyme';

describe('Card Functionality', () => {
  let wrapper;

  it('it should render multiple Hourly Cards', () => {
    wrapper = shallow(

       <HourlyCardContainer
         hour={['1pm', '2pm']}
       />
     );
     expect(wrapper.find('.hourlyCardContainer').length).toEqual(1);
   });

});
