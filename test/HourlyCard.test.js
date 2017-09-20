import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyCard from '../lib/Components/HourlyCard/HourlyCard.js';


describe('Hour Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
    <HourlyCard
      hourTime={'10 PM'}
      hourTemp={'88'}
      dayIcon={'sunny'}
      condition={'partly cloudy'}
    />
  );
  });

  it('should render hour', () => {
    const hourTime = wrapper.find('.hourTime');
    expect(hourTime.text()).toEqual('10 PM');
  });

  it('should render temp', () => {
    const hourTemp = wrapper.find('.tempCtnr');
    expect(hourTemp.text()).toEqual('88°');
  });

  it('should render icon', () => {
    const dayIcon = wrapper.find('.hourlyweatherIcons');
    expect(dayIcon.text()).toEqual('');
  });

  it('should render condition', () => {
    const condition = wrapper.find('.nameCondition');
    expect(condition.text()).toEqual('partly cloudy');
  });
});
